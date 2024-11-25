from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM
import time

# Load the model and tokenizer using the pipeline
model_name = "sshleifer/distilbart-cnn-12-6"
summarizer = pipeline("summarization", model=model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)
def summarize_text(input_text):
    try:
        # Calculate the appropriate max_length based on input length
        input_length = len(tokenizer.encode(input_text))
        max_length = min(250, input_length)  # Keep original max_length
        min_length = max(30, input_length // 4)  # Keep original min_length

        # Use the pipeline to summarize the text
        summary = summarizer(input_text, max_length=max_length, min_length=min_length, do_sample=False)
        return summary[0]['summary_text'].replace(" .", ".")  # Clean up any formatting issues
    except Exception as e:
        return f"Error during summarization: {str(e)}"

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Error: No text provided for summarization.")
    else:
        input_text = sys.argv[1]
        start_time = time.time()  # Start timing
        summary = summarize_text(input_text)
        end_time = time.time()  # End timing
        print(summary)
        