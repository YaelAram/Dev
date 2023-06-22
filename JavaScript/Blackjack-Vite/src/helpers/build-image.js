/*
    buildImage function returns an img HTML element with the features
    img.src = cardPicked attribute complete the ruto to the imagen 
    img.class = add the "card" class to apply some css rules
*/
export const buildImage = ( cardPicked = '' ) => {
    const imageContainer = document.createElement( 'img' );
    imageContainer.src   = 'assets/img/' + cardPicked + '.png';
    imageContainer.alt   = 'Card Image ' + cardPicked;
    imageContainer.classList.add( 'card' );

    return imageContainer;
};
