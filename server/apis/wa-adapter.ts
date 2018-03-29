import * as promptsync from 'prompt-sync';
import * as conversation from 'watson-developer-cloud/conversation/v1';

const conv = new conversation({
  username: 'f808e1b8-6041-476a-9314-4d3ae2e026d5', // replace with service username
  password: 'cUWEapMErMUh', // replace with service password
  version_date: '2017-05-26'
});
const workspace_id = 'e94c98ed-e5cf-4457-a719-4f999b3d7b33'; // replace with workspace ID

// Start conversation with empty message.
conv.message({
  workspace_id: workspace_id
  }, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  var endConversation = false;

  // Check for action flags.
  if (response.output.action === 'display_time') {
    // User asked what time it is, so we output the local system time.
    console.log('The current time is ' + new Date().toLocaleTimeString());
  } else if (response.output.action === 'end_conversation') {
    // User said goodbye, so we're done.
    console.log(response.output.text[0]);
    endConversation = true;
  } else {
    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }
  }

  // If we're not done, prompt for the next round of input.
  if (!endConversation) {
    var newMessageFromUser = prompt('>> ');
    conv.message({
      workspace_id: workspace_id,
      input: { text: newMessageFromUser },
      // Send back the context to maintain state.
      context : response.context,
    }, processResponse)
  }
}
