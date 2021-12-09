let artists = [
    {
        img:'ariana.jpg',
        name:'Ariana Grande',
        subs:'50,1 mi'
    },
    {
        img:'eminem.jpg',
        name:'Eminem',
        subs:'49,7 mi'
    },
    {
        img:'travis.jpg',
        name:'Travis Scott',
        subs:'15 mi'
    },
    {
        img:'dre.jpg',
        name:'Dr. Dre',
        subs:'5 mi'
    },
    {
        img:'ariana.jpg',
        name:'Ariana Grande',
        subs:'50,1 mi'
    },
    {
        img:'eminem.jpg',
        name:'Eminem',
        subs:'49,7 mi'
    },
    {
        img:'travis.jpg',
        name:'Travis Scott',
        subs:'15 mi'
    },
    {
        img:'dre.jpg',
        name:'Dr. Dre',
        subs:'5 mi'
    },
];

function favsFactory(){
    let mainContentDiv = document.getElementById('divMainContent');
    let sectionFav = `
        <section class="favs">
            <div class="titleSection">
                <h1>Seus favoritos</h1>
            </div>
            <div class="contentSection">
                <div class="artists">
    `
    let contentArtists = '';

    for(artist of artists) contentArtists += artistCardFactory(artist);

    sectionFav += `
                    ${contentArtists}
                </div>
            </div>
        </section>
    `;

    mainContentDiv.innerHTML += sectionFav;

}

function artistCardFactory(artist){
    return `
        <div class="artist">
            <div class="imgArtist">
                <img src="assets/img/artists/${artist.img}" alt="">
            </div>
            <p class="nameArtist">${artist.name}</p>
            <p class="descArtist">${artist.subs} subscribers</p>
        </div>
    `;
}

favsFactory();
favsFactory();
favsFactory();
favsFactory();