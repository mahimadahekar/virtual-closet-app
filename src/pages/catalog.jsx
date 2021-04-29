import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

// const CatalogPage = () => {
//   const products = useStore('products');

//   const addProduct = () => {
//     store.dispatch('addProduct', {
//       id: '4',
//       title: 'Apple iPhone 12',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
//     });
//   }

//   return (
//     <Page name="catalog">
//       <Navbar title="Catalog" />
//       <List>
//         {products.map((product) => (
//           <ListItem
//             key={product.id}
//             title={product.title}
//             link={`/product/${product.id}/`}
//           />
//         ))}
//       </List>
//       {products.length === 3 && (
//         <Block>
//           <Button fill onClick={addProduct}>Add Product</Button>
//         </Block>
//       )}
//     </Page>
//   );
// }

// export default CatalogPage;


const CatalogPage = () => (

  <Page name="catalog">

  {/* Top Navbar */}
    {/* <Navbar large sliding={true}>
        <NavLeft>
            <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
        </NavLeft>
        <NavTitle sliding>Virtual Closet</NavTitle>
        <NavRight>
            <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
        </NavRight>
        <NavTitleLarge>Virtual Closet</NavTitleLarge>
  </Navbar> */}

    <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner">
            <div class="left"></div>
            <div class="title">My Virtual Closet</div>
            <div class="right"></div>
        </div>
    </div>

  <div class="fab fab-right-bottom popup-open" data-popup=".popup-about">
      {/* <div class="fab fab-right-bottom"> */}
        <a href="#">
            <i class="icon f7-icons if-not-md">plus</i>
            <i class="icon f7-icons if-not-md">xmark</i>
            <i class="icon material-icons md-only">add</i>
            <i class="icon material-icons md-only">close</i>
        </a>
        {/* <div class="fab-buttons fab-buttons-top">
            <a class="fab-label-button" href="#"><span>1</span><span class="fab-label">Top</span></a>
            <a class="fab-label-button" href="#"><span>2</span><span class="fab-label">Dress</span></a>
            <a class="fab-label-button" href="#"><span>3</span><span class="fab-label">Jacket</span></a>
            <a class="fab-label-button" href="#"><span>4</span><span class="fab-label">Skirts</span></a>
            <a class="fab-label-button" href="#"><span>5</span><span class="fab-label">Shoe</span></a>
            <a class="fab-label-button" href="#"><span>6</span><span class="fab-label">Shorts</span></a>
            <a class="fab-label-button" href="#"><span>7</span><span class="fab-label">Scarf</span></a>
            <a class="fab-label-button" href="#"><span>8</span><span class="fab-label">Pants</span></a>
        </div> */}
    </div>

    <div class="toolbar tabbar tabbar-scrollable toolbar-top" style={{ marginTop:"-40px" }}>
        <div class="toolbar-inner">
            <a href="#tops" class="tab-link tab-link-active">Tops</a>
            <a href="#dress" class="tab-link">Dress</a>
            <a href="#jacket" class="tab-link">Jacket</a>
            <a href="#skirt" class="tab-link">Skirts</a>
            <a href="#shoe" class="tab-link">Shoe</a>
            <a href="#shorts" class="tab-link">Shorts</a>
            <a href="#scarf" class="tab-link">Scarf</a>
            <a href="#pants" class="tab-link">Pants</a>
        </div>
    </div>



    <div class="popup popup-about">
        <div class="block">
            <div class="block-title">Add Item To Your Closet</div>
            <div class="list no-hairlines-md">
                <ul>
                    <li>
                        <div class="item-content item-input">
                            <div class="item-inner">
                                <div class="item-input-wrap">
                                    <input name="" id="closet_item_add_image" type="file" style={{ display:"none" }} accept="image/*"/>
                                    <input type="text" placeholder="Your Closet Item Type" id="closet-add-item-type" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <a id="closet_item_add_image_close" class="button popup-close" href="#">Close</a>
        </div>
    </div>

    <div class="page-content" style={{ paddingTop:"20px" }}>
        <div class="tabs">

            <div class="tab tab-active" id="tops">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_sweetheart_neck_top" src="static/images/blue_sweetheart_neck_top/users_alovelace_closet_thumbs_79999f53-d5f0-4c3d-90e5-7e3609378b41_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_graphic_sweater_top" src="static/images/grey_graphic_sweater_top/users_alovelace_closet_thumbs_8af5e4de-1c2e-4f58-bd66-32d52719d9cd_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_boat_neck_top" src="static/images/brown_boat_neck_top/users_alovelace_closet_thumbs_f042e254-b7a0-453d-82d0-a3cf7c213434_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="red_v_neck_top" src="static/images/red_v_neck_top/users_alovelace_closet_thumbs_9f689e3b-1034-467f-89b4-b27053d26748_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_graphic_top" src="static/images/black_graphic_top/users_alovelace_closet_thumbs_db686301-595c-496a-b8ac-5897240f8e8b_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_sleeveless_top" src="static/images/white_sleeveless_top/users_alovelace_closet_thumbs_0fece267-8c42-44fa-8a52-012f3192763b_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_sleeveless_top" src="static/images/blue_sleeveless_top/users_alovelace_closet_thumbs_4b386119-3818-4130-8597-b1b17115effd_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_denim_top" src="static/images/blue_denim_top/users_alovelace_closet_thumbs_325328f6-53ac-41bc-920b-462aa7223546_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_printed_blouse_top" src="static/images/brown_printed_blouse_top/users_alovelace_closet_thumbs_2f555d51-1f44-45e6-9290-d8437c9d674d_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_polka_dot_top" src="static/images/brown_polka_dot_top/users_alovelace_closet_thumbs_727045a5-188c-458d-a9b6-97fe3a69da29_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_stripe_top" src="static/images/black_stripe_top/users_alovelace_closet_thumbs_9d358bc7-84f3-471d-b40e-b712041abd89_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="green_tank_top" src="static/images/green_tank_top/users_alovelace_closet_thumbs_1774f248-3882-4ba9-b394-ba3d9092584d_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="floral_sleeveless_top" src="static/images/floral_sleeveless_top/users_alovelace_closet_thumbs_5831c5a1-4a80-4fda-ae83-1e2ae42e2255_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_floral_top" src="static/images/black_floral_top/users_alovelace_closet_thumbs_13ae0291-8020-4a4d-a686-3a647c94c895_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_textured_top" src="static/images/grey_textured_top/users_alovelace_closet_thumbs_07a27a16-b261-4ab4-b09a-2d02ae963c9d_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_graphic_top" src="static/images/white_graphic_top/users_alovelace_closet_thumbs_130255dd-7f23-4e7a-8122-dc6a90d6f78c_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_white_stripe_top" src="static/images/black_white_stripe_top/users_alovelace_closet_thumbs_8697436a-5359-44e6-909e-7aa34b8056e6_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_tee_top" src="static/images/white_tee_top/users_alovelace_closet_thumbs_3a356280-a23a-4217-9452-4e633cdab227_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_sleeveless_net_top" src="static/images/black_sleeveless_net_top/users_alovelace_closet_thumbs_644775fc-2648-4195-a9b8-28ed23bd0354_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_tiger_graphic_top" src="static/images/black_tiger_graphic_top/users_alovelace_closet_thumbs_704a0d45-ee52-4d63-a533-d23bcec31fdf_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="khakhi_sleeveless_top" src="static/images/khakhi_sleeveless_top/users_alovelace_closet_thumbs_026482cc-b7c4-4a2a-a056-e6d95b0d64ad_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="checker_tshirt_top" src="static/images/checker_tshirt_top/users_alovelace_closet_thumbs_396635e1-3215-41cd-9381-5c1dada319cd_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_tshirt_top" src="static/images/blue_tshirt_top/users_alovelace_closet_thumbs_11dd6641-3a92-4a4c-8a48-4049f7f012c0_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_sweater_bodycon_top" src="static/images/brown_sweater_bodycon_top/users_alovelace_closet_thumbs_611a99c4-1846-427b-8515-65a4d3b76934_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="red_lined_top" src="static/images/red_lined_top/users_alovelace_closet_thumbs_40393987-d618-4f1f-a63a-39f67130dacf_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="red_solid_top" src="static/images/red_solid_top/users_alovelace_closet_thumbs_04b76630-4b95-4eac-9b93-f3a8384c24f8_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_tank_top" src="static/images/white_tank_top/users_alovelace_closet_thumbs_8a12c428-42da-487b-8fe0-b706183e95a4_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="lilac_v_collar_knit_top" src="static/images/lilac_v_collar_knit_top/Lilac-V-collar-knit-Top.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="green_polka_dot_v_neck_top" src="static/images/green_polka_dot_v_neck_top/Green-Polka-Dot-V-Neck-Blouse.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_button_up_knit_crop_top" src="static/images/blue_button_up_knit_crop_top/Blue-Button-Up-knit-Crop-Top.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_crop_bardot_top" src="static/images/light_blue_crop_bardot_top/light-blue-crop-bardot-blouse.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="rose_floral_edge_top" src="static/images/rose_floral_edge_top/Rose-Floral-Edge-Top.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="baby_blue_ruffle_hem_top" src="static/images/baby_blue_ruffle_hem_top/Baby-blue-Ruffle-Hem-Blouse.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="green_asymmetrical_neck_crop_top" src="static/images/green_asymmetrical_neck_crop_top/green-asymmetrical-neck-crop-top.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_buttoned_curved_crop_top" src="static/images/white_buttoned_curved_crop_top/White-Buttoned-Curved-Crop-Top.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>

            <div class="tab" id="dress">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_solid_short_dress" src="static/images/black_solid_short_dress/users_alovelace_closet_thumbs_187938ed-d865-4ffd-b49a-1aad0dcd3a42_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_zipper_dress" src="static/images/black_zipper_dress/users_alovelace_closet_thumbs_37699017-5255-4447-acd1-e35b2095fdad_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_floral_chinese_collar_dress" src="static/images/black_floral_chinese_collar_dress/users_alovelace_closet_thumbs_2a96524d-7366-4b80-bcaf-7421c96473c0_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_printed_dress" src="static/images/black_printed_dress/users_alovelace_closet_thumbs_460e05d7-6df9-4888-aa0a-0269d4bfd9ed_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_sleeveless_plated_dress" src="static/images/black_sleeveless_plated_dress/users_alovelace_closet_thumbs_97111725-aecd-496e-9723-94fc08dbba15_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="pink_floral_crochet_mini_cami_dress" src="static/images/pink_floral_crochet_mini_cami_dress/pink-floral-crochet-mini-cami-dress.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="purple_knit_bodycon_dress" src="static/images/purple_knit_bodycon_dress/purple-knit-bodycon-dress.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="yellow_floral_print_off_shoulder_edge_dress" src="static/images/yellow_floral_print_off_shoulder_edge_dress/yellow-floral-print-off-shoulder-edge-dress.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>

            <div class="tab" id="jacket">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_leather_jacket" src="static/images/black_leather_jacket/users_alovelace_closet_thumbs_2918525e-79cd-40dc-83d0-1999518b1702_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_v_neck_jacket" src="static/images/grey_v_neck_jacket/users_alovelace_closet_thumbs_0349b381-11cd-4acd-8f8a-b27094db613d_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="pink_leather_jacket" src="static/images/pink_leather_jacket/users_alovelace_closet_thumbs_1209846a-8c24-4581-873f-209d72b9e767_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_open_jacket" src="static/images/black_open_jacket/users_alovelace_closet_thumbs_062ac4db-dd53-4dc4-abc1-0b95db98b8d3_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_bomber_jacket" src="static/images/black_bomber_jacket/users_alovelace_closet_thumbs_c3282849-ea54-4357-b040-0a662ac7e0d6_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_checker_jacket" src="static/images/grey_checker_jacket/users_alovelace_closet_thumbs_2c48c5eb-c964-415d-b577-dcf5d316a21a_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_blazzer_jacket" src="static/images/black_blazzer_jacket/users_alovelace_closet_thumbs_6db42b3f-f1f1-42a4-87d3-3a1ce9c0ca2a_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_buttoned_up_jacket" src="static/images/blue_buttoned_up_jacket/users_alovelace_closet_thumbs_49150225-9a08-46b8-b6f9-d7980d9bb276_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_leather_jacket" src="static/images/brown_leather_jacket/users_alovelace_closet_thumbs_933b2c60-6df0-4e21-95b4-2dd77f7e40a9_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="pink_buttoned_up_jacket" src="static/images/pink_buttoned_up_jacket/users_alovelace_closet_thumbs_0799d33c-ef35-48e3-9e1d-a039b5ede8d3_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="green_zipper_jacket" src="static/images/green_zipper_jacket/users_alovelace_closet_thumbs_31602e9d-3bc7-4e9e-82d3-bc637304a2bd_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="pink_zipper_jacket" src="static/images/pink_zipper_jacket/users_alovelace_closet_thumbs_11029a76-4143-4108-9261-a24bd8c5d3b6_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_v_neck_jacket" src="static/images/black_v_neck_jacket/users_alovelace_closet_thumbs_359e79d9-7bb1-4103-8b8b-cfe5f0c8ceda_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_denim_jacket" src="static/images/blue_denim_jacket/users_alovelace_closet_thumbs_93a427af-46c5-409b-9437-95073296ccbf_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_crop_jacket" src="static/images/black_crop_jacket/users_alovelace_closet_thumbs_283983f4-49af-4e2a-a263-f12599fccb58_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_bomber_jacket" src="static/images/black_bomber_jacket/black-bomber-back-Jacket.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_bomber_jacket" src="static/images/black_bomber_jacket/black-bomber-Jacket.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_printed_plaid_drape_front_coat_jacket" src="static/images/beige_printed_plaid_drape_front_coat_jacket/beige-printed-plaid-drape-front-back-coat.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_printed_plaid_drape_front_coat_jacket" src="static/images/beige_printed_plaid_drape_front_coat_jacket/beige-printed-plaid-drape-front-coat.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_waterfall_coat_jacket" src="static/images/beige_waterfall_coat_jacket/beige-waterfall-coat.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_waterfall_coat_jacket" src="static/images/beige_waterfall_coat_jacket/beige-waterfall-back-coat.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="green_collar_coat_jacket" src="static/images/green_collar_coat_jacket/green-collar-coat.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="green_collar_coat_jacket" src="static/images/green_collar_coat_jacket/green-collar-back-coat.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="army_green_zip_up_drawstring_hooded_back_jacket" src="static/images/army_green_zip_up_drawstring_hooded_back_jacket/army-green-zip-up-drawstring-hooded-back-jacket.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="army_green_zip_up_drawstring_hooded_back_jacket" src="static/images/army_green_zip_up_drawstring_hooded_back_jacket/army-green-zip-up-drawstring-hooded-jacket.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>

            <div class="tab" id="skirt">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_high_waist_skirt" src="static/images/beige_high_waist_skirt/users_alovelace_closet_thumbs_105b376b-11e1-4fae-9d99-08c25447a82d_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_long_plated_skirt" src="static/images/black_long_plated_skirt/users_alovelace_closet_thumbs_dea8cb7f-6ad1-44c3-9dc7-997c8348d542_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_high_waist_long_skirt" src="static/images/black_high_waist_long_skirt/users_alovelace_closet_thumbs_300c701b-ec61-4f89-8945-c32819d195bc_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_plaid_high_rise_mini_skirt" src="static/images/black_plaid_high_rise_mini_skirt/black-plaid-high-rise-mini-skirt.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_print_ruffled_mini_skirt" src="static/images/white_print_ruffled_mini_skirt/white-print-ruffled-mini-skirt.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="pink_knit_skirt" src="static/images/pink_knit_skirt/pink-knit-skirt.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_pleated_midi_skirt" src="static/images/black_pleated_midi_skirt/black-pleated-midi-skirt.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_pleated_flare_skirt" src="static/images/black_pleated_flare_skirt/black-pleated-flare-skirt.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_denim_skirt" src="static/images/blue_denim_skirt/blue-denim-skirt.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>

            <div class="tab" id="shoe">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_sandal_shoe" src="static/images/white_sandal_shoe/users_alovelace_closet_thumbs_6f0b4bc8-3303-405a-b51b-03411eb12cde_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_sandal_shoe" src="static/images/beige_sandal_shoe/users_alovelace_closet_thumbs_7583d4e4-d179-4d18-b66b-0f4b4eeb4932_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blac_shoe" src="static/images/blac_shoe/users_alovelace_closet_thumbs_0fd677cf-3e0c-4eba-876b-c11437c79764_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_shoe" src="static/images/white_shoe/users_alovelace_closet_thumbs_a109b530-56ff-42bc-ac73-d60578b7f363_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_boots_shoe" src="static/images/white_boots_shoe/users_alovelace_closet_thumbs_33f0796d-a26d-4aea-8959-2e3af220c4dc_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_shoe" src="static/images/grey_shoe/users_alovelace_closet_thumbs_2497736b-335a-4c2e-a539-edd956e6b47d_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_high_ankle_zipper_boots_shoe" src="static/images/black_high_ankle_zipper_boots_shoe/users_alovelace_closet_thumbs_660e39ae-8b18-4d0e-8ee9-25e5a5b12215_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_leather_boots_shoe" src="static/images/black_leather_boots_shoe/users_alovelace_closet_thumbs_11b5a313-4e4f-4712-8d33-75ca68759f96_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_zipper_ankle_boots_shoe" src="static/images/black_zipper_ankle_boots_shoe/users_alovelace_closet_thumbs_92db8b01-8bbf-40b8-95ca-0416c67406f1_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_strappy_chunky_heels_ankle_loop_shoe" src="static/images/beige_strappy_chunky_heels_ankle_loop_shoe/beige-strappy-chunky-heels-ankle-loop-heels.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_strappy_strap_flat_sandals_shoe" src="static/images/beige_strappy_strap_flat_sandals_shoe/beige-strappy-strap-flat-sandal.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_leather_knee_high_boots_shoe" src="static/images/black_leather_knee_high_boots_shoe/black-leather-knee-high-boot.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_leather_slip_on_shoe" src="static/images/beige_leather_slip_on_shoe/beige-leather-slip-on-shoe.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_embellished_slides_shoe" src="static/images/black_embellished_slides_shoe/black-embellished-slides-footwear.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_chunky_heels_clear_strap_heels_shoe" src="static/images/white_chunky_heels_clear_strap_heels_shoe/white-chunky-heels-clear-strap-heels.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_drop_dhoulder_open_front_coat_shoe" src="static/images/black_drop_dhoulder_open_front_coat_shoe/black-drop-dhoulder-open-front-coat.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_drop_dhoulder_open_front_coat_shoe" src="static/images/black_drop_dhoulder_open_front_coat_shoe/black-drop-dhoulder-open-front-back-coat.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_textured_lace_up_shoe" src="static/images/black_textured_lace_up_shoe/black-textured-lace-up-shoe.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_chunky_heels_ankle_loop_heels_shoe" src="static/images/black_chunky_heels_ankle_loop_heels_shoe/black-chunky-heels-ankle-loop-heels.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="beige_leather_boots_shoe" src="static/images/beige_leather_boots_shoe/beige-leather-boot.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="pink_textured_chunky_heeled_heels_shoe" src="static/images/pink_textured_chunky_heeled_heels_shoe/pink-textured-chunky-heeled-heels.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_leather_boots_shoe" src="static/images/black_leather_boots_shoe/black-leather-boot.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="taupe_glass_daisy_slingback_sandals_shoe" src="static/images/taupe_glass_daisy_slingback_sandals_shoe/taupe-glass-daisy-slingback-sandal.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_strap_flip_flops_shoe" src="static/images/black_strap_flip_flops_shoe/black-strap-flip-flops-footwear.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_lace_up_casual_shoe" src="static/images/white_lace_up_casual_shoe/white-lace-up-casual-shoe.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_leather_boots_pants" src="static/images/brown_leather_boots_pants/brown-leather-boot.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>

            <div class="tab" id="shorts">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_denim_shorts" src="static/images/blue_denim_shorts/users_alovelace_closet_thumbs_71bf9d38-f377-45e8-a501-71c3238913f4_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_hem_button_denim_shorts" src="static/images/black_hem_button_denim_shorts/black-hem-button-denim-back-shorts.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_hem_button_denim_shorts" src="static/images/black_hem_button_denim_shorts/black-hem-button-denim-shorts.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_denim_shorts" src="static/images/light_blue_denim_shorts/light-blue-denim-back-shorts.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_denim_shorts" src="static/images/light_blue_denim_shorts/light-blue-denim-shorts.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="dark_blue_hem_denim_shorts" src="static/images/dark_blue_hem_denim_shorts/dark-blue-hem-denim-back-shorts.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="dark_blue_hem_denim_shorts" src="static/images/dark_blue_hem_denim_shorts/dark-blue-hem-denim-shorts.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="mustard_solid_pocket_side_shorts" src="static/images/mustard_solid_pocket_side_shorts/mustard-solid-pocket-side-shorts.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="mustard_solid_pocket_side_shorts" src="static/images/mustard_solid_pocket_side_shorts/mustard-solid-pocket-side-back-shorts.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>

            <div class="tab" id="scarf">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_scarf" src="static/images/brown_scarf/users_alovelace_closet_thumbs_23828dc7-44d4-4fe0-8d7e-1583063f872b_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_scarf" src="static/images/blue_scarf/users_alovelace_closet_thumbs_6a7cae82-b944-4b8a-894b-4db814aa4dcc_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="red_scarf" src="static/images/red_scarf/users_alovelace_closet_thumbs_292218cc-9753-43f0-b4df-ad4630d2f1db_400x500.jfif" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_scarf" src="static/images/light_blue_scarf/users_alovelace_closet_thumbs_4bb761eb-bb7d-4d8c-8c22-9b7c82046d22_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="green_scarf" src="static/images/green_scarf/users_alovelace_closet_thumbs_5fc21078-62cd-4d29-9687-0e267406f426_400x500.jfif" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_cashmere_scarf" src="static/images/blue_cashmere_scarf/blue-cashmere-scarf.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_patterned_satin_scarf" src="static/images/black_patterned_satin_scarf/black-patterned-satin-scarf.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="red_silk_scarf" src="static/images/red_silk_scarf/red-silk-scarf.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_cashmere_scarf" src="static/images/black_cashmere_scarf/black-cashmere-scarf.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>

            <div class="tab" id="pants">
                <div class="block">
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_" src="static/images/black_ solid_pants/black- solid-pants.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_high_waisted_cropped_skinny_jeans" src="static/images/light_blue_high_waisted_cropped_skinny_jeans/light-blue-high-waisted-cropped-skinny-jeans.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_floral_slant_pocket_pants" src="static/images/blue_floral_slant_pocket_pants/blue-floral-slant-pocket-pants.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_high_rise_ankle_cut_pants" src="static/images/black_high_rise_ankle_cut_pants/black-high-rise-ankle-cut-pants.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="brown_wide_leg_pants" src="static/images/brown_wide_leg_pants/brown-wide-leg-pants.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="pink_high_waist_solid_pants" src="static/images/pink_high_waist_solid_pants/pink-high-waist-solid-pants.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_letter_waist_plaid_pants" src="static/images/grey_letter_waist_plaid_pants/grey-letter-waist-plaid-pants.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_pants" src="static/images/black_pants/users_alovelace_closet_thumbs_24663de9-92da-4c09-b01e-57eeaf854b65_400x500.png" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="white_pants" src="static/images/white_pants/users_alovelace_closet_thumbs_360b26d8-a844-4a83-bf97-ef80f2243fdb_400x500.png" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_high_waisted_ripped_skinny_jeans" src="static/images/light_blue_high_waisted_ripped_skinny_jeans/light-blue-high-waisted-ripped-skinny-jeans.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_high_waisted_ripped_skinny_jeans" src="static/images/light_blue_high_waisted_ripped_skinny_jeans/light-blue-high-waisted-ripped-skinny-jeans-side.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_high_waisted_ripped_skinny_jeans" src="static/images/light_blue_high_waisted_ripped_skinny_jeans/light-blue-high-waisted-ripped-skinny-jeans-back.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_high_waisted_hem_jeans" src="static/images/black_high_waisted_hem_jeans/black-high-waisted-hem-jeans.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_high_waisted_hem_jeans" src="static/images/black_high_waisted_hem_jeans/black-high-waisted-hem-back-jeans.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="black_high_waisted_hem_jeans" src="static/images/black_high_waisted_hem_jeans/black-high-waisted-hem-side-jeans.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_tapered_cropped_jeans" src="static/images/grey_tapered_cropped_jeans/grey-tapered-cropped-jeans.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_tapered_cropped_jeans" src="static/images/grey_tapered_cropped_jeans/grey-tapered-cropped-jeans-back.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="grey_tapered_cropped_jeans" src="static/images/grey_tapered_cropped_jeans/grey-tapered-cropped-jeans-side.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_high_waisted_cargo_jeans" src="static/images/blue_high_waisted_cargo_jeans/blue-high-waisted-cargo-side-jeans.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_high_waisted_cargo_jeans" src="static/images/blue_high_waisted_cargo_jeans/blue-high-waisted-cargo-jeans.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="blue_high_waisted_cargo_jeans" src="static/images/blue_high_waisted_cargo_jeans/blue-high-waisted-cargo-back-jeans.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="dark_blue_high_waisted_skinny_jeans" src="static/images/dark_blue_high_waisted_skinny_jeans/dark-blue-high-waisted-skinny-jeans-side.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="dark_blue_high_waisted_skinny_jeans" src="static/images/dark_blue_high_waisted_skinny_jeans/dark-blue-high-waisted-skinny-jeans-back.jpg" class="lazy"/> </div>
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="dark_blue_high_waisted_skinny_jeans" src="static/images/dark_blue_high_waisted_skinny_jeans/dark-blue-high-waisted-skinny-jeans.jpg" class="lazy"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-33"> <img style={{ width:"100%"}} data-outfit-name="light_blue_high_waisted_cropped_skinny_jeans" src="static/images/light_blue_high_waisted_cropped_skinny_jeans/light-blue-high-waisted-cropped-skinny-jeans-back.jpg" class="lazy"/> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





  </Page>

);

export default CatalogPage;