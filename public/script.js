function uploadFolder() {
  const files = document.getElementById('folderInput').files;
  const formData = new FormData();

  for (let file of files) {
    formData.append('files', file);
  }

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
    .then(res => res.text())
    .then(alert);
}

function createFile() {
  const filename = document.getElementById('filename').value;
  const content = document.getElementById('filecontent').value;

  fetch('/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, content })
  })
    .then(res => res.text())
    .then(alert);
}

function editFile() {
  const filename = document.getElementById('filename').value;
  const content = document.getElementById('filecontent').value;

  fetch('/edit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, content })
  })
    .then(res => res.text())
    .then(alert);
}

function deleteFile() {
  const filename = document.getElementById('filename').value;

  fetch('/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename })
  })
    .then(res => res.text())
    .then(alert);
}
