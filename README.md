# discord-rpc-js
Custom Discord Rich Presence menggunakan javascript dan nodeJS

## Instalasi

```
$ git clone https://github.com/Fandyfr/discord-rpc-js.git
$ cd discord-rpc-js
```

Lalu kalian buka file namanya rpc.js di vscode,
memasukan beberapa teks yaitu 'ID APIKLASI BOT DISCORD' , cara dapat id
kalian buka <a href='https://discord.com/developers/applications'>Discord Developer</a>, Lalu kalian new application terserah,
kalo sudah kalian buka apiklasi kalian lalu, copy id nya lalu paste di rpc.js pada " const clientId = 'ID Apiklasi Bot Disocrd'; ",  Selanjutnya ada set Activity.

```
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
```

itu kalian terserah mau isi apa :)

### Cara Jalan Nya
Kalian Buka folder discord-rpc-custom copy path lalu ke cmd
cara buka cmd tekan win + R Ketik 'cmd'

Lalu ikuti cara ini:

```
$ cd $PATH
$ node rpc.js
```

Jika Sudah terhubung pastikan discord anda harus aktif agar rpc tetap menyala!!

## LICENSE
[GNU General Public License v2.0](LICENSE)
