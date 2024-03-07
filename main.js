const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu-HamIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
   
    aside.classList.toggle('inactive');
    
}
}

function toggleDesktopMenu(){
    
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');


}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
});
productList.push({
    name: 'Screen',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Mac Book',
    price: 2500,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
     
        
        // product={name, price, image} ->product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
     
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        
         const productInfoFigure = document.createElement('figure');
         const productImgCart = document.createElement('img');
         productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
     
         productInfoFigure.appendChild(productImgCart);
     
         productInfo.appendChild(productInfoDiv);
         productInfo.appendChild(productInfoFigure);
     
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         cardsContainer.appendChild(productCard);
        
     }
}
renderProducts(productList);