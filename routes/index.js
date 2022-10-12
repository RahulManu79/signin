var express = require('express');
var router = express.Router();


const values=[
  {title:'Samsung a30s',
   Image:'https://saurabhelectronics.com/pub/media/catalog/product/cache/9d08971813a040f8f96067a40f75c615/s/a/sa30s12842.jpg' ,
   discription:'amsung Galaxy A30s Android smartphone. Announced Aug 2019. Features 6.4″ display, Exynos 7904 chipset, 4000 mAh battery, 128 GB storage, 4 GB RAM.Internal: 32GB 3GB RAM, 64GB 4GB RAM, 12mp Main Camera'
   },
   {
    title:'Nothing phone 1',
   Image:'https://cdn.shopify.com/s/files/1/0514/8554/0505/files/BA_ABR_300_1003.png?v=1661861484' ,
   discription:'8 GB RAM | 128 GB ROM 16.64 cm (6.55 inch) Full HD+ Display 50MP + 50MP | 16MP Front Camera 4500 mAh Lithium-ion Battery   Qualcomm Snapdragon 778G+ Processor Meet the Glyph Interface. '
 
   },
   {
    title:'APPLE iPhone 12 Pro Max',
   Image:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg' ,
   discription:'256 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A14 Bionic Chip  Ceramic Shield | Industry-leading IP68 Water Resistance All Screen OLED Display'
 
   },
   {
    title:'Oppo Reno 6 Pro 5G',
   Image:'https://fdn.gsmarena.com/imgroot/news/21/05/oppo-reno-6-series-ofic/-x320/gsmarena_009.jpg' ,
   discription:'12 GB RAM | 256 GB ROM | Expandable Upto 2 TB 16.64 cm (6.55 inch) Full HD+ Display 64MP + 8MP + 2MP + 2MP | 32MP Front Camera 4500 mAh Lithium-ion Polymer Battery   MediaTek Dimensity 1200 Processor Display type: AMOLED '
 
   },
   {
    title:'realme 9i',
   Image:'https://emibaba.com/wp-content/uploads/2022/02/Realme-9i-black-12.jpg' ,
   discription:'4 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display 50MP + 2MP + 2MP | 16MP Front Camera 5000 mAh Lithium ion Battery Qualcomm Snapdragon 680 (SM6225) Processor Android 11 '
 
   }, {
    title:'REDMI 10 Prime',
   Image:'https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Mobiles/Xiaomi%20Mi/Redmi-10-Prime/Redmi-10-Prime-Bifrost-Blue-back.jpg' ,
   discription:'6 GB RAM | 128 GB ROM | Expandable Upto 512 GB 16.51 cm (6.5 inch) Full HD Display 50MP + 8MP + 2MP + 2MP | 8MP Front Camera 6000 mAh Battery Helio G88 Processo rimary Camera  Primary Camera Features50MP + 8MP + 2MP + 2MP'
 
   },
   
 ]
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('home',{values})
  }else{
    res.render('index',{"error" : req.session.loginError})
    req.session.loginError = false;
  }
});

  
router.get('/home',function(req,res){
    if(req.session?.login){
     res.render('home',{values})
    }
    else{
      res.render('index',{display:"d-none"})
    }

  })

const emaildb = 'rahul@gmail.com'
const passworddb ='1234'

router.post('/', function(req, res, next) {

const {email,password}=req.body;

if (email===emaildb && password===passworddb){
  req.session.login=true;
  res.render('home',{values})
}else{
  req.session.loginError = true
  res.redirect('/')
}

 
});
router.get('/logout',(req,res)=>{
  req.session.destroy();
 res.redirect('/');
})
module.exports = router;
