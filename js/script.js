document.getElementById('summarize-button').addEventListener('click', async () => {
    const text = document.getElementById('text-input').value;

    if (!text.trim()) {
        alert('Please enter text to summarize.');
        return;
    }

    try {
        // Fetch the summarized text from the API
        const response = await fetch(`http://localhost:3000/api/summarize?text=${encodeURIComponent(text)}`, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} ${response.statusText}`;
            console.error(errorMessage);
            document.getElementById('summary-output').innerHTML = `
                <p style="color: red;">${errorMessage}. Please try again later.</p>`;
            return;
        }

        const data = await response.json();

        if (data.summary) {
            // Display the summary in the output container
            document.getElementById('summary-output').innerHTML = `
                <h3>Summary:</h3>
                <p>${data.summary}</p>`;
        } else if (data.error) {
            document.getElementById('summary-output').innerHTML = `
                <p style="color: red;">Error: ${data.error}</p>`;
        } else {
            document.getElementById('summary-output').innerHTML = `
                <p style="color: red;">Unexpected response. Please try again.</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('summary-output').innerHTML = `
            <p style="color: red;">Server error. Please check your backend or try again later.</p>`;
    }
});
