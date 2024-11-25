
# Text Summarizer AI

Text Summarizer AI is a web application designed to provide concise summaries of long texts. The app leverages cutting-edge natural language processing techniques to deliver accurate and context-aware text summarization.

## Features

- Upload or paste text for summarization.
- Futuristic, responsive UI/UX design.
- Efficient backend processing using Python.
- Integration with NLP libraries for summarization.

## Project Structure

The project is divided into two main components:

### 1. Frontend
- Located in the `Frontend` directory.
- Developed using HTML, CSS, and JavaScript.
- Provides an intuitive user interface for text input and displays summarized results.

### 2. Backend
- Located in the `Backend` directory.
- Written in Python (`summarizer.py`,'server.js').
- Handles text summarization and communicates with the frontend.

## Installation

1. Clone the repository or download the project zip.
2. Navigate to the extracted folder.
3. Install the required dependencies by running:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Start the backend server:
   ```bash
   node server.js
   ```
2. Open the frontend in your browser:
   - Locate the HTML file in the `Frontend` directory and open it.Open root folder in cmd and run the below command
   ```bash
   npx http-server
   ```
3. Paste or upload text for summarization.

## Dependencies

The project uses the following key Python libraries:
- Flask: For backend server functionality.
- Natural Language Toolkit (NLTK) or Hugging Face Transformers: For text summarization.
- Ensure all dependencies are listed in the `requirements.txt`.

## Contributing

Feel free to contribute by submitting issues or pull requests. Collaboration is welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Future Enhancements

- Add support for multiple summarization methods (e.g., extractive and abstractive).
- Improve the UI/UX design with animations and interactive elements.
- Enable file-based input (e.g., PDFs, DOCX).
