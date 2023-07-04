```python
from speaking_flow import SpeakingFlow
from responding_flow import RespondingFlow

class PranXterTasks:
    def __init__(self, twilio_number):
        self.speaking_flow = SpeakingFlow(twilio_number)
        self.responding_flow = RespondingFlow(twilio_number)

    def prank_call(self, target_number, prank_script):
        # Generate message using OpenAI GPT
        message = self.speaking_flow.generate_message(prank_script)

        # Synthesize voice using ElevenLabs
        voice = self.speaking_flow.synthesize_voice(message)

        # Transmit call using Twilio
        self.speaking_flow.transmit_call(target_number, voice)

    def respond_to_call(self, call):
        # Recognize voice using voice recognition
        message = self.responding_flow.recognize_voice(call)

        # Generate response using OpenAI GPT
        response = self.responding_flow.generate_message(message)

        # Synthesize voice using ElevenLabs
        voice = self.responding_flow.synthesize_voice(response)

        # Transmit response using Twilio
        self.responding_flow.transmit_call(call.from_number, voice)
```