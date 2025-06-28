const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const pose = new Pose.Pose({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
});

pose.setOptions({
  modelComplexity: 1,
  selfieMode: false,
  enableSegmentation: false,
  smoothLandmarks: true,
});

pose.onResults(onResults);

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    pose.send({ image: img });
  };
  img.src = URL.createObjectURL(file);
}

function onResults(results) {
  if (!results.poseLandmarks) {
    document.getElementById('body-shape').innerText = "No body detected.";
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
  Pose.drawConnectors(ctx, results.poseLandmarks, Pose.POSE_CONNECTIONS, { color: '#00FF00', lineWidth: 2 });
  Pose.drawLandmarks(ctx, results.poseLandmarks, { color: '#FF0000', lineWidth: 2 });

  const shape = analyzeBodyShape(results.poseLandmarks);
  document.getElementById('body-shape').innerText = `Detected Body Shape: ${shape}`;
}

function analyzeBodyShape(landmarks) {
  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];
  const leftHip = landmarks[23];
  const rightHip = landmarks[24];

  if (!(leftShoulder && rightShoulder && leftHip && rightHip)) {
    return "Missing key landmarks";
  }

  const shoulderWidth = Math.abs(leftShoulder.x - rightShoulder.x);
  const hipWidth = Math.abs(leftHip.x - rightHip.x);
  const ratio = shoulderWidth / hipWidth;

  if (ratio > 1.2) return "Inverted Triangle";
  if (ratio < 0.8) return "Pear";
  if (Math.abs(ratio - 1) < 0.1) return "Hourglass or Rectangle";
  return "Intermediate Shape";
}
