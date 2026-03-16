import Meting, {
    type FormattedLyric,
    type FormattedPic,
    type FormattedSong,
    type FormattedUrl,
    type Platform,
} from "@meting/core";
const meting = new Meting('tencent')

meting.format(true)

meting.search("张杰", { page: 1, limit: 2 }).then(res => {
    console.log(`// search`)
    console.log(meting.raw)

    const songList: FormattedSong[] = JSON.parse(res);

    const { lyric_id, pic_id, url_id, id, album, artist, name, source } = songList[0];
    console.log(`// song`)
    console.log({
        lyric_id,
        pic_id,
        url_id,
        id,
        album,
        artist,
        name,
        source
    })

    meting.song(id).then(res => {
        console.log(`// song detail`)
        console.log(meting.raw)
        const song: FormattedSong[] = JSON.parse(res);
        console.log(song)
    })

    meting.album('000P3l050Olt27').then(res => {
        console.log(`// album`)
        console.log(meting.raw)
        const album = JSON.parse(res);
        console.log(album)
    })

    meting.artist('001pWERg3vFgg8').then(res => {
        console.log(`// artist`)
        console.log(meting.raw)
        const artist = JSON.parse(res);
        console.log(artist)
    })

    meting.playlist('9518334860').then(res => {
        console.log(`// playlist`)
        console.log(meting.raw)
        const playlist = JSON.parse(res);
        console.log(playlist)
    })

    meting.url(url_id).then(res => {
        console.log(`// url`)
        console.log(meting.raw)
        const url: FormattedUrl = JSON.parse(res);
        console.log(url)
    })

    meting.lyric(lyric_id).then(res => {
        console.log(`// lyric`)
        console.log(meting.raw)
        const lyric: FormattedLyric = JSON.parse(res);
        console.log(lyric)
    })

    meting.pic(pic_id).then(res => {
        console.log(`// pic`)
        console.log(meting.raw)
        const pic: FormattedPic = JSON.parse(res);
        console.log(pic)
    })

})

