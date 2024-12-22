const { cmd } = require('../command')
const fs = require('fs');
const path = require('path');
const {readEnv} = require('../lib/database')
const config = require('../config')


// auto voice
cmd({
  on: "body"
}, async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../data/autovoice.json');
    
    // Read the JSON data from the file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Loop through the data and match the message
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_VOICE === 'true') {
                // If AUTO_VOICE is enabled, send the audio
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, {
                    audio: { url: data[text] }, 
                    mimetype: 'audio/mpeg', 
                    ptt: true
                }, { quoted: mek });
            }
        }
    }
});


//auto reply 
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../data/autoreply.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_REPLY === 'true') {
                //if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});           
//auto recording
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {  
  const config = await readEnv();
     if (config.RECORDING === 'true') { 
        if (isOwner) return;
           await conn.sendPresenceUpdate('recording', from);
     }         
});

//auto react
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {  
  const config = await readEnv();
     if (config.AUTO_REACT === 'true') { 
        if (isOwner) return;
             await conn.sendMessage(from, { react: { text: '🌹', key: mek.key } });             
     }         
});
