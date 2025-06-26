# 📂 MCP File System Manager

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-lightgrey?logo=express)](https://expressjs.com/)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)](https://github.com/your-username/mcp-file-manager)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A simple and beginner-friendly web-based file management system built with **Node.js** and **Express.js**. This application allows users to upload folders, create, edit, and delete files directly from the browser using a clean, responsive user interface.


## ✨ Features

- 📤 **Folder Upload**: Upload complete folder structures via browser
- 📝 **File Creation**: Create new files with custom content
- ✏️ **File Editing**: Edit existing files directly on the server
- 🗑️ **File Deletion**: Remove files easily through the web interface
- 🎨 **Responsive UI**: Clean and modern interface built with HTML5 & JavaScript
- 🔄 **Real-time Updates**: Instant feedback for all file operations

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   https://github.com/Vishalrathod8788/mcp_basics_test.git
   cd mcp_basics_test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   node server.js
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mcp-file-manager/
├── 📄 server.js              # Express.js backend server
├── 📁 public/
│   ├── 📄 index.html         # Main web interface
│   └── 📄 script.js          # Frontend JavaScript logic
├── 📁 uploads/               # Directory for uploaded files
├── 📄 package.json           # Project dependencies and scripts
├── 📄 README.md              # Project documentation
└── 📄 LICENSE                # MIT License file
```

## 🎮 Usage

### 📤 Upload Folder
1. Click the "Upload Folder" button
2. Select a folder from your computer
3. All files will be uploaded to the `uploads/` directory

### 📝 Create New File
1. Enter a filename (e.g., `example.txt`)
2. Add your content in the text area
3. Click "Create File" to save

### ✏️ Edit Existing File
1. Enter the filename you want to edit
2. Modify the content as needed
3. Click "Save Changes" to update

### 🗑️ Delete File
1. Enter the filename you want to delete
2. Click "Delete File" to remove permanently

## 🔌 API Reference

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/upload` | Upload multiple files | `multipart/form-data` |
| `POST` | `/create` | Create a new file | `{ "filename": "string", "content": "string" }` |
| `POST` | `/edit` | Edit existing file | `{ "filename": "string", "content": "string" }` |
| `POST` | `/delete` | Delete a file | `{ "filename": "string" }` |

### Example API Usage

```javascript
// Create a new file
fetch('/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    filename: 'example.txt',
    content: 'Hello, World!'
  })
});
```

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **File Handling**: Multer middleware
- **Frontend**: HTML5, Vanilla JavaScript, CSS3
- **Storage**: Local file system


### Multer Configuration

```javascript
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_FOLDER),
  filename: (req, file, cb) => cb(null, file.originalname),
});
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "multer": "^1.4.5"
  }
}
```


## 👨‍💻 Author

**Vishal Rathod**
- MCA Student, Gujarat Technological University
- GitHub: https://github.com/vishalrathod8788/
- Email: vishalrathod1562004@gmail.com


---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/vishalrathod8788/">Vishal Rathod</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
