// Army of Love · Radar archive data
// One entry per release. Artists (A) and labels (L) are shared, so each is written once
// and reused across posts. Fields per release: title, artists, label, type, track count,
// releaseDate, dateAdded, Leefer's note (blurb), tracks that caught him, links.
const A={ // artists
 amtrac:{name:"Amtrac",bc:"https://amtrac.bandcamp.com",sp:"https://open.spotify.com/artist/3ifxHfYz2pqHku0bwx8H5J",sc:"https://soundcloud.com/amtrac"},
 polygonia:{name:"Polygonia",bc:"https://polygonia.bandcamp.com",sp:"https://open.spotify.com/artist/1bvMkEwyURFPl2eDGZieUm",sc:"https://soundcloud.com/polygonia",ig:"https://www.instagram.com/_polygonia_"},
 popp:{name:"Simon Popp",bc:"https://simonpopp.bandcamp.com",sp:"https://open.spotify.com/artist/3g6w2ATRPWhtFCUtkDIdcp",ig:"https://www.instagram.com/simon.popp/"},
 funke:{name:"Sascha Funke",bc:"https://saschafunke.bandcamp.com",sp:"https://open.spotify.com/artist/1dDTkRz9WVOQr63enjJ1Yd",sc:"https://soundcloud.com/saschafunkeofficial",ig:"https://www.instagram.com/saschafunke_music/"},
 ame:{name:"Âme",bc:"https://ame-engoli.bandcamp.com",sp:"https://open.spotify.com/artist/5muFO8VqYRCRW13EkvX564"},
 ksky:{name:"Ksky",sp:"https://open.spotify.com/artist/2YnhtgANdlYYjGrJwo4Z9u",ig:"https://www.instagram.com/pavel_korzhenskij/"},
 hammar:{name:"Per Hammar",bc:"https://perhammar.bandcamp.com",sp:"https://open.spotify.com/artist/64ro37ZAxFkXIJ2pxOdqCX",sc:"https://soundcloud.com/per-hammar",ig:"https://www.instagram.com/perhammar2000"},
 lex:{name:"Lex (Athens)",bc:"https://lexathens.bandcamp.com",sp:"https://open.spotify.com/artist/07xgHn84Dp2AVF5tEsmGOh"},
 mytron:{name:"Mytron",bc:"https://mytron.bandcamp.com",sp:"https://open.spotify.com/artist/5yS2elNWR9wp0TDlb566QJ"},
 abacus:{name:"Abacus",sp:"https://open.spotify.com/artist/6NLqTCFXDOWYXrZV6WyVO6"},
 urbancc:{name:"URBAN CC",sp:"https://open.spotify.com/artist/1beunTtJdnQMKxmCQJ0VMh"}
};
const L={ // labels
 openers:{name:"Openers",bc:"https://openers.bandcamp.com",ig:"https://www.instagram.com/openersrecs/"},
 squama:{name:"Squama",bc:"https://squamarecordings.bandcamp.com",ig:"https://www.instagram.com/squama.rec/"},
 kompakt:{name:"Kompakt",bc:"https://kompakt.bandcamp.com",ig:"https://www.instagram.com/kompaktrecords/"},
 innervisions:{name:"Innervisions",bc:"https://innervisionsmusic.bandcamp.com",ig:"https://www.instagram.com/innervisions_official/"},
 runningback:{name:"Running Back",bc:"https://runningbackrecords.bandcamp.com",ig:"https://www.instagram.com/runningbackrecords/"},
 dirtyhands:{name:"Dirty Hands",bc:"https://dirtyhandsrec.bandcamp.com",ig:"https://www.instagram.com/dirtyhandsrec/"},
 dog:{name:"Delusions of Grandeur",bc:"https://delusionsofgrandeurrec.bandcamp.com",ig:"https://www.instagram.com/delusionsofgrandeurrecords/"},
 multiculti:{name:"Multi Culti",bc:"https://multiculti.bandcamp.com",sc:"https://soundcloud.com/multiculti",ig:"https://www.instagram.com/multicultifamily/"},
 phonogramme:{name:"Phonogramme",bc:"https://phonogramme.bandcamp.com"},
 berg:{name:"Berg Audio",bc:"https://bergaudio.bandcamp.com",ig:"https://www.instagram.com/berg_audio/"}
};
const SETS= // Fruitful Friday · Nov 6, 2026
{
 albums:[
 {title:"Dream",video:"3BCLIhSUMQU",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["amtrac"],label:"openers",type:"ALBUM",count:14,img:"dream-cover.jpg",
  blurb:"One of my favorite producers since I discovered him this year. Insanely clean productions, real depth, and just the right amount of good cheese.\n\nI'm saving the full listen for the right moment, but wanted you to know it's out.",
  tracks:["Ricardo's Last Dance"],bc:"https://amtrac.bandcamp.com/album/dream",sp:"https://open.spotify.com/album/3oNraxn7bql4vFjqiBfCgG"},
 {title:"Apiformes",video:"CxhSDdVOpWk",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["polygonia","popp"],label:"squama",type:"ALBUM",count:11,img:"apiformes-cover.jpg",
  blurb:"Techno jazz alien.\n\nPolygonia's music challenges my listening muscles and I deeply appreciate it.\nSounds and rhythms from another planet.\n\nIt's not for everyone, but I invite you to explore sound design from another planet.",
  tracks:["Honeydrop","Nectar Flow","Hive Mind","Pollination Beats"],bc:"https://polygonia.bandcamp.com/album/apiformes",sp:"https://open.spotify.com/album/31z5z1c3dDB1kkbK1LXTY5"},
 {title:"Planes In Reverse",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["funke"],label:"kompakt",type:"ALBUM",count:10,img:"planes-in-reverse-cover.jpg",
  blurb:"Any time a full LP comes out on Kompakt, you have my attention.\n\nI haven't had the time or space to fully listen yet, but it's on my list.\nI've been listening to albums on my morning walks, and this will be one of those.",
  tracks:[],bc:"https://saschafunke.bandcamp.com/album/planes-in-reverse",sp:"https://open.spotify.com/album/4HPOqRWymj064S8zOSAJH7"},
 {title:"Love Is The Dance",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["ame"],label:"innervisions",type:"ALBUM",count:13,img:"love-is-the-dance-cover.jpg",
  blurb:"To be honest, I didn't connect with this on my first listen.\nMost people I know love Innervisions, so I wanted to make sure you knew this came out today.\n\nIt's just not for me.",
  tracks:[],bc:"https://ame-engoli.bandcamp.com/album/love-is-the-dance-lp",sp:"https://open.spotify.com/album/3GMbNTMjPI2gJULzw5RaK5"},
 {title:"Collected Works",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["ksky"],label:"runningback",type:"ALBUM",count:10,img:"collected-works-cover.jpg",
  blurb:"I'm not familiar with Ksky, but the single for this album came out last week and I really connected with it: \"Bad Philly.\"\n\nLooking forward to taking this one for a walk and an intentional listen.\nHonestly, that could take days or weeks from now.",tracks:["Bad Philly","Weirdub"],bc:"https://runningbackrecords.bandcamp.com/album/collected-works",sp:"https://open.spotify.com/album/3DCc8tUSaFjfIP7dbNbvJH"}
 ],
 other:[
 {title:"Ontario EP",video:"rKuTxzf5Zdo",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["hammar"],label:"dirtyhands",type:"EP",count:4,img:"ontario-ep-cover.jpg",
  blurb:"My favorite release so far, absolutely love it!\n\nStraight-up slam dance bangers with tasteful elements, builds, twists and turns.\n\nI connected with 3 of the 4 tracks on first listen, which is a staggeringly high rate for me.\nThis dude is something special.",
  tracks:["Ontario","Off Disk","Oops All Sixes"],bc:"https://dirtyhandsrec.bandcamp.com/album/ontario-ep"},
 {title:"Lab 94' EP",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["lex"],label:"dog",type:"EP",count:4,img:"lab-94-cover.jpg",
  blurb:"Delusions of Grandeur has become a favorite label of mine as of late. The releases often feature guitar and semi-jazzy sounds.\n\nHonestly, I don't know what I'm talking about, so don't take my write-ups about genres and sounds too seriously. I'm just speaking from the heart.\n\nI'm somewhat musically ignorant, but I know what I like and what moves me.\nI haven't fully listened outside of snippets, but there are some cool-sounding tunes on here.",tracks:[],bc:"https://lexathens.bandcamp.com/album/lab-94-ep",sp:"https://open.spotify.com/album/1LZ3IQkJP9RFpDqkNMSTT3"},
 {title:"Ascorbic",releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["mytron"],label:"multiculti",type:"EP",count:4,img:"ascorbic-cover.jpg",
  blurb:"Multi Culti, what a great label.\n\nAlways unique and weird. I appreciate the weirdness of this label, and this project delivers on that front.\nI haven't fully listened, but I went through the snippets and there's some cool shit on here.",tracks:[],bc:"https://mytron.bandcamp.com/album/ascorbic",sp:"https://open.spotify.com/album/3dlAvqjzJtCdqwgNNkxL35"},
 {title:"The Earthly Pleasures EP",releaseDate:"2026-11-26",dateAdded:"2026-11-06",artists:["abacus"],label:"phonogramme",type:"EP · REISSUE",count:3,img:"earthly-pleasures-cover.jpg",
  blurb:"I think this may be a re-release of this project, I can't say for sure.\nEither way, super tasteful jazzy jammers.\n\nGroovers with a touch of soul. Highly recommend.",tracks:[],bc:"https://deepcutsvinyl.bandcamp.com/album/the-earthly-pleasures-ep-reissue-pre-orders",sp:"https://open.spotify.com/album/6ouWiSVUcrbyGxPOwvqvFh"},
 {title:"Urban CC: Remixed",releaseDate:"2026-11-05",dateAdded:"2026-11-06",artists:["urbancc"],label:"berg",type:"REMIX EP",count:4,img:"urban-cc-remixed-cover.jpg",
  sub:"Remixes by Priku, Andrew Azara, Mihai Popoviciu & Jon Sable",
  blurb:"Berg Audio is consistently delivering quality projects. I haven't listened to this one yet, but the snippets were promising and I love the label.\n\nIt's a remix album, so be sure to check out the original projects if you're feeling the sound.",tracks:[],bc:"https://bergaudio.bandcamp.com/album/urban-cc-remixed-priku-andrew-azara-mihai-popoviciu-jon-sable",
  originals:[["Pt 1","https://bergaudio.bandcamp.com/album/urban-cc-the-introduction-part-i"],["Pt 2","https://bergaudio.bandcamp.com/album/urban-cc-the-introduction-part-ii"]]}
 ]};

// Upcoming releases (announcements). Each shows a countdown + Remind me until release day,
// switches to OUT TODAY on the day, then NEW for 7 days, then drops off the homepage.
const UPCOMING=[
 {title:"ARP",artist:"Felix Rösch",label:"Nettwerk",type:"ALBUM",releaseDate:"2026-11-13",dateAdded:"2026-11-09",video:"90SEUNfNPfo",
  img:"https://i.scdn.co/image/ab67616d0000b2733ed385984f09e12241edf8e8",sp:"https://open.spotify.com/album/1NjOUiBBVueeLMIVZXkJUc",
  blurb:"I'm a big fan of Felix Rösch's music and he has a new album coming out this Friday. Wanted to get that on your radar and plant a seed for you to check out his existing catalog.",
  blurbOut:"ARP is out today. A deeply personal record of neo-classical composition from Felix Rösch.",
  more:"https://felixrosch.bandcamp.com/",
  links:[["SPOTIFY","https://open.spotify.com/album/1NjOUiBBVueeLMIVZXkJUc"],["BANDCAMP","https://felixrosch.bandcamp.com/"]]},
 // Radar mentions: short, shown only in the Upcoming releases bar (no full post)
 {mention:true,title:"Astro",artist:"Donato Dozzy",label:"Tresor Records",type:"ALBUM",releaseDate:"2026-11-20",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a3622820286_10.jpg",
  links:[["CRATES","https://crates.co/release/astro/7415369"],["BANDCAMP","https://donaotodozzy.bandcamp.com/album/astro"]]}
];

// Daily posts (one track or release, scheduled by date). The newest post dated today or earlier
// sits at the top of the homepage. "plays" = how many times Leefer has gone back to it (4+ badge).
const POSTS=[
 {date:"2026-11-10",kicker:"TECHNO TUESDAY",title:"Does It Get Easier?",artist:"Holo",label:"Noire & Blanche",video:"dxGl-BoL-jw",plays:10,
  img:"techno-tuesday-holo.jpg",imgWide:true,
  sp:"https://open.spotify.com/track/1zmThgFg1hww3UqVouPNRl",artistSp:"https://open.spotify.com/artist/5PrWAhH8BO28ieKNfYYFEX",
  playlist:{title:"Techno Tuesday",url:"https://open.spotify.com/playlist/3QViRQw2MjLQAI98kmWNuk",img:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846a5cc179cc2196842094ce52",line:"Only the top of the tippity top. Send it!",note:"Every Techno Tuesday track lives here."},
  body:"Happy Techno Tuesday!\n\nI'm going to start a series where I highlight tracks that I've listened to \"4 or more times\". I listen to a lot of music, and it's rare that I listen to a track more than 4 times. If I do, it's special to me, and I want to start sharing those here.\n\nHolo has become my favorite producer at the moment. I absolutely love a number of his productions, and will be highlighting a few over the next weeks and months. For now, I want to start with a track I've listened to at least 10 times. Holo – Does It Get Easier?\n\nWHAT A TUNE. Press play. Sit back and enjoy. No skipping."}
];
