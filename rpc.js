const { Client } = require('discord-rpc');

const clientId = 'ID Apiklasi Bot Discord';
const rpc = new Client({ transport: 'ipc'});

process.on('SIGINT', () => {
  console.log('\nApakah Anda ingin menutup proses ini? (y/N)');
  process.stdin.once('data', (data) => {
    const input = data.toString().trim().toLowerCase();

    if (input === 'y') {
      if (rpc && rpc.transport && rpc.transport.close) {
        rpc.transport.close();
      }

      console.log('Proses ditutup.');
      process.exit();
    } else {
      console.log('Proses tidak ditutup.');
    }
  });
});

const getLocalTimestamp = () => {
  const now = new Date();
  return Math.floor(now.getTime() / 1000);
};

// Rich Presence buatan FandyFr

rpc.on('ready', () => {
    console.log('RPC buatan Fandy Berhasil Terhubung Ke Server!!!');
    const updateActivity = () => {
      const localTimestamp = getLocalTimestamp();
      rpc.setActivity({
        details: 'Deskripsi Anda',
        state: 'Deskripsi 2',
        startTimestamp: localTimestamp,
        largeImageKey: 'nama_gambar_besar',
        largeImageText: 'Deskripsi Gambar Besar',
        smallImageKey: 'nama_gambar_kecil',
        smallImageText: 'Deskripsi Gambar Kecil',
        type: 'PLAYING',
        buttons: [
          { label: 'Teks 1', url: 'URL 1' },
          { label: 'Teks 2', url: 'URL 2' },
        ],
        instance: false,
      });
    };
      
    setInterval(updateActivity, 1000);
    updateActivity();
});

rpc.login({ clientId }).catch(console.error);