
/*
validationDeFormulaire.js
Komlan Albert Gblokpor-Koffi
Dernière modification : 12-11-2020
*/


anime({
    targets: '.motion-path-demo .el',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 2000,
    loop: true
});


new Vue({
    el: '#app',
    data: function () {
        return {
            message: 'Hello Word',
            currentSrc: null,
            currentImg: null,
            images: [
                {
                    url: 'https://c2.staticflickr.com/4/3791/9334231607_bc541edd87_b.jpg',
                    url_t: 'https://c2.staticflickr.com/4/3791/9334231607_bc541edd87_t.jpg',
                    width: '1024',
                    height: '683'
                },
                {
                    url: 'https://c2.staticflickr.com/8/7005/6749719201_b214b81c14_b.jpg',
                    url_t: 'https://c2.staticflickr.com/8/7005/6749719201_b214b81c14_t.jpg',
                    width: '1024',
                    height: '691'
                },
                {
                    url: 'https://c2.staticflickr.com/8/7144/6692980571_10e4cd0447_b.jpg',
                    url_t: 'https://c2.staticflickr.com/8/7144/6692980571_10e4cd0447_t.jpg',
                    width: '1024',
                    height: '816'
                },
                {
                    url: 'https://c2.staticflickr.com/8/7200/7034812403_bcca5d3d66_b.jpg',
                    url_t: 'https://c2.staticflickr.com/8/7200/7034812403_bcca5d3d66_t.jpg',
                    width: '1024',
                    height: '769'
                },
                {
                    url: 'https://c2.staticflickr.com/2/1329/842708924_d175dd65ba_o.jpg',
                    url_t: 'https://c2.staticflickr.com/2/1329/842708924_f16f5292b8_t.jpg',
                    width: '1100',
                    height: '741'
                }
            ],
            hiResSrc: null,
            loResSrc: null
        }
    },

    beforeMount: function () {
        this.currentImg = this.images[0]
        this.loResSrc = this.currentImg.url_t
        this.hiResSrc = this.currentImg.url
    },

    mounted: function () {
        this.loadImage()
    },

    methods: {
        loadImage: function (image) {
            that = this
            if (image) {
                that.currentSrc = null
                that.currentImg = image
                that.loResSrc = that.currentImg.url_t
                that.hiResSrc = that.currentImg.url
            }
            var loResImg, hiResImg, that, context
            loResImg = new Image()
            hiResImg = new Image()
            context = this.$el.getElementsByTagName('canvas')[0].getContext('2d') // get the context of the canvas

            loResImg.onload = function () {
                context.drawImage(loResImg, 0, 0, that.currentImg.width, that.currentImg.height)
                that.currentSrc = that.loResSrc
            }
            hiResImg.onload = function () {
                setTimeout(
                    function () {
                        that.currentSrc = that.hiResSrc
                    }, 100)
            }
            loResImg.src = that.loResSrc
            hiResImg.src = that.hiResSrc
        }
    }
})
/* ici commence la validation formulaire*/

function validationFormulaire() {
    let codeRegional = document.getElementById("phone");

    let codeRegionalPermise = false;

    switch(codeRegional.value) {
        case "819":
            codeRegionalPermise = true;
            break;
        case "418":
            codeRegionalPermise = true;
            break;
        case "514":
            codeRegionalPermise = true;
            break;
    }

    if(codeRegionalPermise === false){
        alert(" SVP Vous n'avaez pas entré le bon CODE REGIONAL !!!! Veuillez choisir un code regional entre  ceux-ci: 819; 418; 514 MERCI !!!! ");
    }
    return codeRegionalPermise;
}


