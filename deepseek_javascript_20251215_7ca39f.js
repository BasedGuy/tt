async function testAPIDirectly() {
    const apiKey = '6fc9030ecb074dc88055f8a257aff0f7';
    const audioUrl = 'https://storage.googleapis.com/aai-web-samples/news.mp4'; // A sample audio URL

    try {
        console.log('Step 1: Starting transcription job...');
        const response = await fetch('https://api.assemblyai.com/v2/transcript', {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                audio_url: audioUrl,
                language_code: 'en'
            })
        });

        console.log('Response status:', response.status);
        if (response.ok) {
            const data = await response.json();
            console.log('Success! Transcript ID:', data.id);
        } else {
            const error = await response.text();
            console.error('Error response:', error);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
}

testAPIDirectly();