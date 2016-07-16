<?php

/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();
Mage::app()->setCurrentStore(Mage_Core_Model_App::ADMIN_STORE_ID);
 
/*========Start================= Create static block for "Footer BDS Top" section =====================================================*/ 
$staticBlockTop = array(
    'title' => 'Footer BDS Top',
    'identifier' => 'footer_bds_top',
    'content' => '<ul class="footer_menu">
            	<li>
                	<h3>INFO</h3>
                    <a href="#">Versandkosten</a>
                </li>
                <li>
                	<h3>NICHT AUS DER SCHWEIZ</h3>
                    <a href="#">Shop für EU-Kunden</a>
                    <a href="#">Nicht -EU Kunden</a>
                </li>
                <li>
                	<h3>ZAHLUNGSOPTIONEN</h3>
                    <p>
                    	<a href="#"><img src="{{skin url="images/card1.png"}}" /></a>
                        <a href="#"><img src="{{skin url="images/card2.png"}}" alt=""></a>
                        <a href="#"><img src="{{skin url="images/card3.png"}}" alt=""></a>
                    </p>
                </li>
            </ul>',
    'is_active' => 1,
    'stores' => array(0),
);
				
Mage::getModel('cms/block')->setData($staticBlockTop)->save();
/*========End================= Create static block for "Footer BDS Top" section =====================================================*/ 


/*========Start================= Create static block for "Footer BDS Middle" section =====================================================*/ 
$staticBlockMiddle = array(
    'title' => 'Footer BDS Middle',
    'identifier' => 'footer_bds_mid',
    'content' => '<ul>
            	<li>
                    <h3>INFO</h3>
                    <a href="#">Our Story</a>
                    <a href="#">Shop</a>
                    <a href="#">Help</a>
                </li>
                <li>
                    <h3>FOLLOW</h3>
                    <a href="#">Instagram</a>
                    <a href="#">Pinterest</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </li>
                <li>
                    <h3>STAY UPDATED</h3>
                    <p>
                    	Sign up for our newsletter to get the latest news, announcements, special offers and event information
                    </p>
                    <a class="subscribe_btn" href="javascript:void(0)"><img src="{{skin url="images/btn_arrow.png}}" alt=""> SUBSCRIBE TO NEWSLETTER</a>
                </li>
            </ul>',
    'is_active' => 1,
    'stores' => array(0),
);
				
Mage::getModel('cms/block')->setData($staticBlockMiddle)->save();
/*========End================= Create static block for "Footer BDS Middle" section =====================================================*/ 


/*========Start================= Create static block for "Footer BDS Bottom" section =====================================================*/ 
$staticBlockBottom = array(
    'title' => 'Footer BDS Bottom',
    'identifier' => 'footer_bds_bottom',
    'content' => '<ul>
                    <li><a href="#">&copy; BY BODENSCHATZ</a></li>
                    <li><a href="#">IMPRESSUM</a></li>
                    <li><a href="#">DATENSCHUTZ</a></li>
                    <li><a href="#">AGB</a></li>
                  </ul>',
    'is_active' => 1,
    'stores' => array(0),
);
				
Mage::getModel('cms/block')->setData($staticBlockBottom)->save();
/*========End================= Create static block for "Footer BDS Bottom" section =====================================================*/ 



/*========Start================= Create static page for "Slider" section =====================================================*/ 
$cmsPageSlider = array(
    'title' => 'BDS Home Page',
    'root_template' => 'one_column', // two_columns_left, two_columns_right, three_columns
    'meta_keywords' => '',
    'meta_description' => '',
    'identifier' => 'bds-home',
    'content' => '<div class="slideshow-container">
                        <ul class="slideshow">
                        <li><a href="{{config path="web/secure/base_url"}}"><img alt="#" src="{{skin url="images/slide-1.jpg"}}" /></a></li>
                        <li><a href="{{config path="web/secure/base_url"}}"><img alt="#" src="{{skin url="images/slide-2.jpg"}}" /></a></li>
                        <li><a href="{{config path="web/secure/base_url"}}"><img alt="#" src="{{skin url="images/slide-3.jpg"}}" /></a></li>
                        </ul>
                        <div class="slideshow-pager">&nbsp;</div>
                        <span class="slideshow-prev">&nbsp;</span> <span class="slideshow-next">&nbsp;</span></div>',
    'content_heading' => '',
    'is_active' => 1,
    'sort_order' => 0,
    'stores' => array(0),
);
            
Mage::getModel('cms/page')->setData($cmsPageSlider)->save();
/*========End================= Create static page for "Slider" section =====================================================*/  

$installer->endSetup();


?>





