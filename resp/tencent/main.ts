import Meting, {
    type FormattedLyric,
    type FormattedPic,
    type FormattedSong,
    type FormattedUrl,
    type Platform,
} from "@meting/core";
const meting = new Meting('tencent')

meting.search("张杰", { page: 1, limit: 2 }).then(res => {
    console.log(`// search`)
    console.log(meting.raw)

    const songList: FormattedSong[] = JSON.parse(res);

    const { } = songList[0];

})

