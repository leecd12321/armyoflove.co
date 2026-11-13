// Army of Love · Radar archive data
// Set ambient:true on any release or daily post to show the AMBIENT badge.
// superProject:true = SUPER PROJECT badge (black circle, gold star).
// DATABASS: tracks:[...] = tracks Leefer added to the DATABASS; tasters:{"Track name":"YouTubeID"} = his taster video for that track.
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
 {title:"Dream",video:"3BCLIhSUMQU",tasters:{"Ricardo's Last Dance":"3BCLIhSUMQU"},releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["amtrac"],label:"openers",type:"ALBUM",count:14,img:"dream-cover.jpg",
  blurb:"One of my favorite producers since I discovered him this year. Insanely clean productions, real depth, and just the right amount of good cheese.\n\nI'm saving the full listen for the right moment, but wanted you to know it's out.",
  tracks:["Ricardo's Last Dance"],bc:"https://amtrac.bandcamp.com/album/dream",sp:"https://open.spotify.com/album/3oNraxn7bql4vFjqiBfCgG"},
 {title:"Apiformes",video:"CxhSDdVOpWk",tasters:{"Hive Mind":"CxhSDdVOpWk","Nectar Flow":"66RA0nC82J0","Pollination Beats":"R_osLnp6fKA"},releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["polygonia","popp"],label:"squama",type:"ALBUM",count:11,img:"apiformes-cover.jpg",
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
 {title:"Ontario EP",video:"rKuTxzf5Zdo",tasters:{"Ontario":"rKuTxzf5Zdo","Off Disk":"A61fcAFBdl4","Oops All Sixes":"Pl_njZlePy4"},releaseDate:"2026-11-06",dateAdded:"2026-11-06",artists:["hammar"],label:"dirtyhands",type:"EP",count:4,img:"ontario-ep-cover.jpg",
  blurb:"My favorite release so far, absolutely love it!\n\nStraight-up slam dance bangers with tasteful elements, builds, twists and turns.\n\nI connected with 3 of the 4 tracks on first listen, which is a staggeringly high rate for me.\nThis dude is something special.",
  tracks:["Ontario","Off Disk","Oops All Sixes","Airex"],superProject:true,bc:"https://dirtyhandsrec.bandcamp.com/album/ontario-ep"},
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
  links:[["STORE","https://felixrosch.com"],["SPOTIFY","https://open.spotify.com/album/1NjOUiBBVueeLMIVZXkJUc"]]},
 // Radar mentions: short, shown only in the Upcoming releases bar (no full post)
 {mention:true,title:"Astro",artist:"Donato Dozzy",label:"Tresor Records",type:"ALBUM",releaseDate:"2026-11-20",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a3622820286_10.jpg",
  links:[["CRATES","https://crates.co/release/astro/7415369"],["BANDCAMP","https://donaotodozzy.bandcamp.com/album/astro"]]},
 {mention:true,va:true,title:"Pop Ambient 2027",artist:"VA",label:"Kompakt",type:"COMPILATION",releaseDate:"2026-12-04",dateAdded:"2026-11-09",tags:["AMBIENT"],ambient:true,
  img:"https://f4.bcbits.com/img/a3826203060_10.jpg",
  links:[["CRATES","https://crates.co/release/pop-ambient-2027/7628066"],["BANDCAMP","https://kompakt.bandcamp.com/album/pop-ambient-2027"]]},
 {mention:true,va:true,title:"DJ-Kicks: Dam Swindle",artist:"Dam Swindle",label:"!K7",type:"COMPILATION",releaseDate:"2026-11-20",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a2040506614_10.jpg",
  links:[["CRATES","https://crates.co/release/dj-kicks-dam-swindle/7478785"],["BANDCAMP","https://damswindle.bandcamp.com/album/dj-kicks-dam-swindle-2"]]},
 {mention:true,title:"The Hill EP",artist:"Philipp Kolbe",label:"Kompakt",type:"EP",releaseDate:"2026-11-20",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a2778628170_10.jpg",
  links:[["CRATES","https://crates.co/release/the-hill-ep/7506248"],["BANDCAMP","https://philipp-kolbe.bandcamp.com/album/the-hill-ep"]]},
 {mention:true,title:"Tumbling Cycles",artist:"Billus",label:"Smallville Records",type:"ALBUM",releaseDate:"2026-11-20",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a1620741630_10.jpg",
  links:[["CRATES","https://crates.co/release/tumbling-cycles/7632578"],["BANDCAMP","https://smallville-records.bandcamp.com/album/smallville-lp-19-billus-tumbling-cycles"]]},
 {mention:true,title:"Running Back Mastermix: Edward – Edits",artist:"Edward",label:"Running Back",type:"COMPILATION",releaseDate:"2026-11-20",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a2454391620_10.jpg",
  links:[["CRATES","https://crates.co/release/running-back-mastermix-edward-edits/7632803"],["BANDCAMP","https://runningbackrecords.bandcamp.com/album/running-back-mastermix-edward-edits"]]},
 // taster:"YouTubeID" = Leefer's taster video for the release (▶ TASTER pill on the Radar row)
 {mention:true,title:"Greetings Earthlings",artist:"Rebūke",label:"ERA",type:"SINGLE",releaseDate:"2026-11-20",dateAdded:"2026-11-11",taster:"cxxYFC4CyeQ",
  img:"https://i.ytimg.com/vi/cxxYFC4CyeQ/hqdefault.jpg",
  links:[]},
 {mention:true,title:"Rings of Light",artist:"Sven Väth & Roman Flügel",label:"Time Warp Records",type:"SINGLE",releaseDate:"2026-11-20",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a2728950555_10.jpg",
  links:[["CRATES","https://crates.co/release/rings-of-light/7565465"],["BANDCAMP","https://timewarpofficial.bandcamp.com/album/rings-of-light"]]},
 {mention:true,title:"My Definition of House Music Part 3",artist:"Sascha Dive",label:"Phonogramme",type:"EP",count:4,releaseDate:"2026-11-13",dateAdded:"2026-11-12",
  img:"https://geo-media.beatport.com/image_size/500x500/528d1043-b26b-4bd2-abdb-aa7f5599f58f.jpg",
  links:[["BANDCAMP","https://deepvibesrecordings.bandcamp.com/album/my-definition-of-house-music-part-3"],["SPOTIFY","https://open.spotify.com/album/0gOYus4pOm3unzhmh9xjjr"]]},
 {mention:true,title:"Endless / Purge",artist:"Efdemin & .VRIL",label:"CINTH",type:"EP",count:4,releaseDate:"2026-11-13",dateAdded:"2026-11-12",
  img:"https://geo-media.beatport.com/image_size/500x500/e77a7a28-e560-47ec-a737-52d63e30cbb5.jpg",
  links:[["BANDCAMP","https://cinth.bandcamp.com/album/endless-purge"],["SPOTIFY","https://open.spotify.com/album/0JeUjQ3it2kp7kajrYpuwM"]]},
 {mention:true,downtempo:true,title:"A Window In",artist:"gingembre & KCM",label:"Serafin Audio Imprint",type:"ALBUM",count:8,releaseDate:"2026-11-13",dateAdded:"2026-11-12",
  img:"https://geo-media.beatport.com/image_size/500x500/0681ce4a-9a75-4bca-b60b-e2d6653c51d2.jpg",
  links:[["BANDCAMP","https://serafinaudio.bandcamp.com/album/a-window-in"],["SPOTIFY","https://open.spotify.com/album/7BeZKMBeDtQ3bkIYe3R66N"]]},
 {mention:true,title:"Eyes Wide Open EP",artist:"Toman",label:"HIGH CEILINGS",type:"EP",count:2,releaseDate:"2026-11-13",dateAdded:"2026-11-12",
  img:"https://geo-media.beatport.com/image_size/500x500/6909f19b-ea36-44dc-a216-1f00e68c57f4.jpg",
  links:[["SPOTIFY","https://open.spotify.com/album/5J2m8mZcAhi46eg5SWmfkL"]]},
 {mention:true,title:"A Tiger Never Loses Its Stripes (Part 3)",artist:"Tiger Stripes",label:"Rekids",type:"EP",count:4,releaseDate:"2026-11-13",dateAdded:"2026-11-13",
  img:"https://geo-media.beatport.com/image_size/500x500/418c6eac-630f-46b8-a1a7-ae2e8e68d79e.jpg",
  links:[["BANDCAMP","https://rekids.bandcamp.com/album/a-tiger-never-loses-its-stripes-part-3"],["SPOTIFY","https://open.spotify.com/album/0SJaBoXFNsD6F2GBJfkxog"]]},
 {mention:true,va:true,title:"20 Years Of Bar 25 Music",artist:"VA",label:"Bar 25 Music",type:"COMPILATION",count:15,releaseDate:"2026-11-13",dateAdded:"2026-11-13",
  img:"https://geo-media.beatport.com/image_size/500x500/fa6c5609-d788-4edf-b00c-587c5f4e4368.jpg",
  links:[["BANDCAMP","https://bar25music.bandcamp.com/album/20-years-of-bar-25-music-bar25277"],["SPOTIFY","https://open.spotify.com/album/4FW0CjCGOsJX669eLKUzVZ"]]},
 {mention:true,title:"Mirrorball Sleaze",artist:"Dave Seaman",label:"Selador",type:"ALBUM",count:12,releaseDate:"2026-11-13",dateAdded:"2026-11-13",
  img:"https://geo-media.beatport.com/image_size/500x500/c0454059-a0b5-4936-adfe-1c4b9dca8c43.jpg",
  links:[["BANDCAMP","https://selador-recordings.bandcamp.com/album/dave-seaman-mirrorball-sleaze-digital-mix-individual-downloads-selador"],["SPOTIFY","https://open.spotify.com/album/3udFw9oP8zrADsjMEWLKGr"]]},
 {mention:true,title:"Anjanas 20th Anniversary Reprise",artist:"Pablo Bolivar",label:"Seven Villas Forest",type:"ALBUM",count:11,releaseDate:"2026-11-13",dateAdded:"2026-11-13",
  img:"https://geo-media.beatport.com/image_size/500x500/a8e1e805-26c2-4c9f-8b2e-c03b09f661b8.jpg",
  links:[["BANDCAMP","https://sevenvillas.bandcamp.com/album/anjanas-20th-anniversary-reprise"],["SPOTIFY","https://open.spotify.com/album/3gPffH35DKJQbm7POGo1tZ"]]},
 {mention:true,title:"Forest of Tranquility",artist:"Masayoshi Fujita",label:"Erased Tapes",type:"ALBUM",releaseDate:"2026-11-13",dateAdded:"2026-11-09",tags:["AMBIENT"],ambient:true,
  img:"https://f4.bcbits.com/img/a3300898528_10.jpg",
  links:[["BANDCAMP","https://masayoshifujita.bandcamp.com/album/forest-of-tranquility"],["SPOTIFY","https://open.spotify.com/album/70TI4vmpTkFnXhhww9EGY8"]]},
 {mention:true,title:"My Own Shadow",artist:"Marcel Dettmann",label:"!K7",type:"ALBUM",releaseDate:"2026-11-13",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a4074034011_10.jpg",
  links:[["BANDCAMP","https://marceldettmann.bandcamp.com/album/my-own-shadow"],["SPOTIFY","https://open.spotify.com/album/6PpOjG0pSNJs9Y2khzEeKn"]]},
 {mention:true,va:true,title:"Global Underground: Nubreed 13",artist:"Spencer Brown",label:"Global Underground",type:"COMPILATION",releaseDate:"2026-12-04",dateAdded:"2026-11-09",
  img:"nubreed-13-cover.jpg",
  links:[["CRATES","https://crates.co/release/global-underground-nubreed-13/7699859"],["GU STORE","https://www.globalunderground.co.uk/product/nubreed-13-spencer-brown/"]]},
 {mention:true,title:"Music For Two Films About Water",artist:"Liz Harris",label:"Kranky",type:"ALBUM",releaseDate:"2026-11-27",dateAdded:"2026-11-09",tags:["AMBIENT"],ambient:true,
  img:"https://f4.bcbits.com/img/a3619605292_10.jpg",
  links:[["CRATES","https://crates.co/release/music-for-two-films-about-water/7613973"],["BANDCAMP","https://grouper.bandcamp.com/album/music-for-two-films-about-water"]]},
 {mention:true,title:"It's Time EP",artist:"Tour-Maubourg",label:"Alone Together",type:"EP",releaseDate:"2026-11-27",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a3560979287_10.jpg",
  links:[["CRATES","https://crates.co/release/its-time/7584524"],["BANDCAMP","https://tourmaubourg.bandcamp.com/album/tour-maubourg-its-time-ep"]]},
 {mention:true,va:true,title:"fabric presents Palms Trax",artist:"Palms Trax",label:"fabric Records",type:"COMPILATION",releaseDate:"2026-11-27",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a3971595965_10.jpg",
  links:[["CRATES","https://crates.co/release/fabric-presents-palms-trax/7641723"],["BANDCAMP","https://palmstrax.bandcamp.com/album/fabric-presents-palms-trax"]]},
 {mention:true,title:"I'm Failing To Lie",artist:"Dino Lenny",label:"Crosstown Rebels",type:"SINGLE",releaseDate:"2026-11-27",dateAdded:"2026-11-09",
  img:"https://www.horizonsmusic.co.uk/cdn/shop/files/1_40572c21-3796-4cc6-af3b-837d49652fb2.jpg",
  links:[["CRATES","https://crates.co/release/im-failing-to-lie/7685302"],["VINYL","https://www.horizonsmusic.co.uk/products/dino-lenny-im-failing-to-lie"]]},
 {mention:true,title:"Tell It To The Mountain",artist:"Axel Boman & Superpitcher",label:"Blurry",type:"ALBUM",releaseDate:"2026-09-25",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a0726252316_10.jpg",
  links:[["BANDCAMP","https://axelboman.bandcamp.com/album/tell-it-to-the-mountain"]]},
 {mention:true,title:"Home",artist:"Marsh",label:"Marshan Records",type:"ALBUM",releaseDate:"2026-11-03",dateAdded:"2026-11-09",tracks:["Home","Jacob's Song","Designer"],
  img:"https://f4.bcbits.com/img/a0121068038_10.jpg",
  links:[["CRATES","https://crates.co/release/home/7345513"],["BANDCAMP","https://marshmusician.bandcamp.com/album/home"]]},
 {mention:true,title:"Fly Intergalactic Gangsta Schitt",artist:"Tripmastaz",label:"Logistic Records",type:"ALBUM",releaseDate:"2026-12-14",dateAdded:"2026-11-09",
  img:"https://f4.bcbits.com/img/a3879960382_10.jpg",
  links:[["BANDCAMP","https://tripmastaz.bandcamp.com/album/fly-intergalactic-gangsta-schitt"]]},
 {mention:true,title:"ICU,BBY,STA",artist:"Neon Dots",label:"All Things Connect",type:"EP",releaseDate:"2026-08-18",dateAdded:"2026-11-09",
  tracks:["ICU,BBY,STA (I See You Baby)"],
  img:"https://f4.bcbits.com/img/a1894914524_10.jpg",
  links:[["CRATES","https://crates.co/release/icubbysta/7678915"],["BANDCAMP","https://allthingsconnect.bandcamp.com/album/icu-bby-sta"]]},
 // DATABASS-only entry (not a Radar release row). Appears in the DATABASS on its dateAdded at the go-live time.
 {dbOnly:true,title:"Nights Over Melbourne",artist:"Holo",label:"Noire & Blanche",releaseDate:"",dateAdded:"2026-11-10",
  tracks:["Does It Get Easier?"],tasters:{"Does It Get Easier?":"dH8c9BBw9To"},
  img:"https://i.scdn.co/image/ab67616d0000b273bb4c9fc51deffd1281e7460d",
  links:[["SPOTIFY","https://open.spotify.com/track/1zmThgFg1hww3UqVouPNRl"]]}
];

// New Music Friday posts (cover wall at the top of the homepage). picks = release titles from UPCOMING, in order;
// the first is the big tile, the first 6 are the big covers, the rest go under ALSO OUT TODAY.
const NMF=[
 {date:"2026-11-13",id:"new-music-friday-nov-13",title:"New Music Friday",top:6,
  notes:{"Anjanas 20th Anniversary Reprise":"I just took this album for a morning walk and I absolutely love it.\n\nThis is the 20-year anniversary of Pablo's debut album. He went back, revisited each track and made a new version for the 20th anniversary. What a cool concept.\n\n5/5 I recommend you sink in and give this album a listen. Thank you Pablo, love it."},
  picks:["Anjanas 20th Anniversary Reprise","Eyes Wide Open EP","A Tiger Never Loses Its Stripes (Part 3)","A Window In","ARP","My Own Shadow",
         "Mirrorball Sleaze","Endless / Purge","Forest of Tranquility","My Definition of House Music Part 3","20 Years Of Bar 25 Music"]}
];

// Daily posts (one track or release, scheduled by date). The newest post dated today or earlier
// sits at the top of the homepage. "plays" = how many times Leefer has gone back to it (4+ badge).
const POSTS=[
 {date:"2026-11-10",kicker:"TECHNO TUESDAY",title:"Does It Get Easier?",artist:"Holo",label:"Noire & Blanche",video:"dH8c9BBw9To",plays:10,
  img:"techno-tuesday-holo.jpg",imgWide:true,
  sp:"https://open.spotify.com/track/1zmThgFg1hww3UqVouPNRl",artistSp:"https://open.spotify.com/artist/5PrWAhH8BO28ieKNfYYFEX",
  playlist:{title:"Techno Tuesday",url:"https://open.spotify.com/playlist/3QViRQw2MjLQAI98kmWNuk",img:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846a5cc179cc2196842094ce52",line:"Only the top of the tippity top. Send it!",note:"Every Techno Tuesday track lives here."},
  body:"Happy Techno Tuesday!\n\nI'm starting a series where I highlight tracks that I've listened to \"4 or more times\". I listen to a lot of music, and it's rare that I listen to a track more than 4 times. If I do, it's special to me, and I want to start sharing those here.\n\nHolo has become my favorite producer at the moment. I absolutely love a number of his productions, and will be highlighting a few over the next weeks and months. For now, I want to start with a track I've listened to at least 10 times. Holo – Does It Get Easier?\n\nWHAT A TUNE. Press play. Sit back and enjoy. No skipping."}
];
