const fastify = require('fastify')({ logger: true });
const { exec } = require('child_process');
const path = require('path');

fastify.register(require('@fastify/cors'), { origin: '*' });

const PORT = 3000;

// Root route
fastify.get('/', async (request, reply) => {
    reply.header('Content-Type', 'application/json');
    return { message: 'Welcome to the Text Summarizer API!' };
});

// Summarize text route
fastify.get('/api/summarize', async (request, reply) => {
    const text = request.query.text;

    if (!text || text.trim() === '') {
        return reply.code(400).send({ error: 'No text provided for summarization.' });
    }

    const pythonScriptPath = path.join(__dirname, 'summarize.py');

    try {
        const summary = await new Promise((resolve, reject) => {
            exec(`python "${pythonScriptPath}" "${text}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error executing Python script:', error.message);
                    return reject(new Error(`Execution failed: ${error.message}`));
                }
                if (stderr) {
                    console.error('Python script error output:', stderr);
                    return reject(new Error(stderr.trim()));
                }
                resolve(stdout.trim());
            });
        });

        reply.send({ summary });
    } catch (error) {
        console.error('Error during summarization:', error.message);
        reply.code(500).send({ error: error.message });
    }
});

// Start the server
fastify.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server running at ${address}`);
});
