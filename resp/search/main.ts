import Meting, {
    type FormattedLyric,
    type FormattedPic,
    type FormattedSong,
    type FormattedUrl,
    type Platform,
} from "@meting/core";


const platforms: readonly Platform[] = ["netease", "tencent", "kugou", "baidu", "kuwo"] as const;


const meting = new Meting();
platforms.forEach((platform) => {
    meting.site(platform).format(true);
    
    meting.search("孙燕姿", {page: 1, limit: 3}).then((res: string) => {
        console.log(`// ${platform}\n\n`)
        console.log(meting.raw)
        // const songList: FormattedSong[] = JSON.parse(res);
        // songList.forEach((song) => {
        //     console.log(song.id, song.name, song.artist, song.album, song.pic_id, song.url_id, song.lyric_id, song.source);
        // });
    });

    // meting.url("123").then((res: string) => {
    //     const url: FormattedUrl = JSON.parse(res);
    //     (url.url, url.br, url.size);
    // });

    // meting.pic("123").then((res: string) => {
    //     const pic: FormattedPic = JSON.parse(res);
    //     pic.url;
    // });

    // meting.lyric("123").then((res: string) => {
    //     const lyric: FormattedLyric = JSON.parse(res);
    //     (lyric.lyric, lyric.tlyric);
    // });
});
