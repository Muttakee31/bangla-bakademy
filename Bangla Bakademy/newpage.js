var dictionary = [
    {word: "নীলক্ষেত", define: "এই ক্ষেতে দেশী-বিদেশী বই উৎপাদন-বণ্টন করা হয়ে থাকে", sentence_ex: "নীলক্ষেতে আগুন লাগছে"},
    {word: "শালা", define: "কারও বোনকে বিয়ে না করেও যে গালি দেয়া যায়", sentence_ex: "ওই শালার ঘরের শালা, হ্যাডম দেখাস হ্যাডম।"},
    {word: "ই", define: "বাংলা স্বরবর্ণ। 'ইইইইইই' বহুল ব্যবহ্রত ঢং করার প্রকাশভঙ্গী।", sentence_ex: "ইইইইইইইইইইইই..... (যত বেশি ঢং ততক্ষণ চলতে থাকবে)।"},
    {word: "অনিক", define: "বাংলাদেশের বিশ্ববিদ্যালয়সমূহের ভর্তি পরীক্ষাগুলোতে সাধারণত যে নামের ছেলেদের প্রথম হওয়ার রেকর্ড সবচেয়ে বেশি", sentence_ex: "অনিক ২০১৪ তে বুয়েটে প্রথম স্থান, ২০১৫ তে চুয়েটে প্রথম স্থান, ২০১৬ তে হাজী দানেশে প্রথম স্থান, ২০১৭ তে সাস্টে প্রথম স্থান, ২০১৮ তে ঢাবিতে প্রথম স্থান অধিকার করতে থাকলো"},
    {word: "শৌচাগার", define: "দুনিয়ার বুকে একটুকরা বেহেশতি জায়গা", sentence_ex: "শেখ সাদীকে সকাল থেকে ৫ বার বদনা নিয়ে শৌচাগারের দিকে দৌড়াতে দেখলাম।"},
    {word: "ব্লগ", define: "যা দিয়ে ইন্টারনেট চালানো হয়", sentence_ex: "ওই হালার পো, ব্লগে কি লিখছস?"},
    {word: "লেগুনা", define: " ভেতরে বসলে দম বন্ধ হয়ে যায়, পেছনে ঝুললে বাতাসে সব উড়ে যায় আর সামনে বসলে বিশেষ অংগে ব্রেক পড়ার আতংক সৃষ্টি হয়", sentence_ex: " শাকিব খান লেগুনার ব্যবসায় নাম লিখলেন"},
    {word: "মশারি", define: "মশার রিহ্যাব সেন্টার।", sentence_ex: "মশারির চিপায় সব মশা ঢুইকা বইসা আছে"},
    {word: "অহর্নিশি", define: "দিবারাত্রি", sentence_ex: "চাতক প্রায় অহর্নিশি, চেয়ে আছে কালো শশী।"},
    {word: "বত্ব", define: "কথা প্রসঙ্গে। কিছু নিষ্কর্মা পোলাপান by the way থেকে btw বানাইসে। তাতেও চুলকানি না কমায় btw কে বত্ব বানাইসে।", sentence_ex: "বত্ব জীবনটাই বত্ব"},
    {word: "মর্ত্যুকাম", define: "মরতে ইচ্ছুক যে ব্যক্তি", sentence_ex: "জনসংখ্যার বিষ্ফোরণ প্রতিরোধে মর্ত্যুকাম লোকসংখ্যা বৃদ্ধি সময়ের দাবি"},
    {word: "ঘুম", define: "হাতে কাজ থাকলে যা আসে কিন্তু একদম বেকার অবস্থায় আসেনা।", sentence_ex: "সুইটি দূরে দূরে থাকে তাই হাসানের ঘুম আসে না।"},
    {word: "দেউনিয়া", define: "মাতব্বর গোছের", sentence_ex: "পোলাটা তো ভালোই দেউনিয়া।"},
    {word: "গফ", define: "টাকা খসানোর মেশিন", sentence_ex: "কি মামা, গফ নিয়ে তো ভালই রেস্টুরেন্টে খাইতে যাও!"},
    {word: "খাম", define: "যেটার ভেতর কি আছে আপনি বাইরে থেকে জানবেন না", sentence_ex: "খামের খামের ভিতর খামে বন্দি খামের ভেতর খাম"},

];

var xml=new XMLHttpRequest();
var method="GET";
var url="https://bakademia.com/rand_word/";
var asynchronous=true;
xml.open(method, url, asynchronous);
xml.send();
var w="",def="",ex="";
xml.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var $data = JSON.parse(this.responseText);
            //console.log($data);
            def = $data.define;
            ex = $data.sentence_ex;
            w = $data.word;
            document.getElementById("word").innerHTML = w;
            document.getElementById("define").innerHTML = "ব্যাখ্যা: " + def;
            document.getElementById("example").innerHTML = "একটি প্রায়োগিক দৃশ্য: " + ex;
        }
        else {
            var $rand = Math.floor((Math.random() * 15) + 1);
            var $data = dictionary[$rand];
            ///console.log($data);
            def = $data.define;
            ex = $data.sentence_ex;
            w = $data.word;
            document.getElementById("word").innerHTML = w;
            document.getElementById("define").innerHTML = "ব্যাখ্যা: " + def;
            document.getElementById("example").innerHTML = "একটি প্রায়োগিক দৃশ্য: " + ex;
        }
    }
};

/*
xml.onloadend = function() {
    if (xml.status == 404) {
        throw new Error(url + ' replied 404');
        console.log("baalamar");
        var $rand = Math.floor((Math.random() * 15) + 1);
        var $data = dictionary[$rand];
        console.log($data);
        def = $data.define;
        ex = $data.sentence_ex;
        w = $data.word;
        document.getElementById("word").innerHTML = w;
        document.getElementById("define").innerHTML = "ব্যাখ্যা: " + def;
        document.getElementById("example").innerHTML = "উদাহরণঃ " + ex;
    }
};*/
