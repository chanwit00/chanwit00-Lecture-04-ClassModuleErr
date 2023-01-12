class media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class song extends media {
    constructor(songDate) {
        super(songDate);
        this.artist = songDate.artist;
    }
}

const mySong = new song({
    artist: "Oasis",
    name: "Wonderwall",
    publishDate: 1995
});

console.log(mySong);