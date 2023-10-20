import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  // const [name, setName] = useState('Ken');
  // const [person, setPerson] = useState({name: 'Taiwo', age: '25'})

  // const clickHandler = () => {
  //   setName('Kenny')
  //   setPerson({name: 'Taiye', age: 26})
  // }

  return (
    <View style={styles.container}>
      <View style={styles.BandageText}>
          <Text>Bandage</Text>
          <Image source={require('./assets/toggleicon.jpg')} style={styles.Img}/>
          
      </View>
      <View style={styles.NavBar}>
        <Text style={styles.home}>Home</Text>
        <Text>Shop</Text>
        <Text>About</Text>
        <Text>Blog</Text>
        <Text style={styles.contact}>Contact</Text>
        <Text>Pages</Text>

      </View>

        <View style={styles.authView}>
          <Image source={require('./assets/authIcon.jpg')} style={styles.authIcon}/>
            Login / Register
        </View>

        <View style={styles.icons}> 
          <Image source={require('./assets/searchIcon.jpg')} style={styles.searchIcon}/>
          <Image source={require('./assets/cartIcon.jpg')} style={styles.cartIcon}/>
          <Image source={require('./assets/loveIcon.jpg')} style={styles.loveIcon}/>
        </View>

        <View style={styles.hAnds}>
          <Text style={styles.Ahome}>Home</Text>
          <Image source={require('./assets/arrow.jpg')} style={styles.arrow}/>
          <Text>Shop</Text>
        </View>

        <View style={styles.imageslide}>
          <Image source={require('./assets/couch.jpg')} style={styles.couch} />
          <View style={styles.imgSlide}>
            <Image source={require('./assets/Chair.jpg')} style={styles.Chair} />
            <Image source={require('./assets/couchSlide.jpg')} style={styles.couchSlide} />
          </View>
        </View>
        <View style={styles.floatingphone}>
          <Text style={styles.floating}>Floating Phone</Text>
          <View style={styles.rating}>
            <Image source={require('./assets/staricon.jpg')} style={styles.staricon} />
            <Image source={require('./assets/staricon.jpg')} style={styles.staricon} />
            <Image source={require('./assets/staricon.jpg')} style={styles.staricon} />
            <Image source={require('./assets/staricon.jpg')} style={styles.staricon} />
            <Image source={require('./assets/unstaricon.jpg')} style={styles.unstaricon} />
            <Text style={styles.review}>10 Reviews</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.price}>$1,139.33</Text>
          </View>
          <View style={styles.available}>
            <Text style={styles.availability}>Availability : </Text>
            <Text style={styles.stock}>In Stock</Text>
          </View>
          <View>
            <Text style={styles.description}>Met Minim Mollie non desert<br></br>
              Alamo est sit cliquey dolor do<br></br>
              met sent.RELIT official consequent<br></br>
              door ENIM RELIT Mollie. Excitation<br></br>
              Venial consequent sent nostrum met.<br></br>
            </Text>
            <Image source={require('./assets/line.jpg')} style={styles.line} />
          </View>
          <View style={styles.eclipes}>
            <Image source={require('./assets/blue.jpg')} style={styles.blue} />
            <Image source={require('./assets/green.jpg')} style={styles.green} />
            <Image source={require('./assets/orange.jpg')} style={styles.orange} />
            <Image source={require('./assets/dark.jpg')} style={styles.orange} />
          </View>
          <View style={styles.option}>
            <Button style={styles.button} title='Select Options' uppercase={false}></Button>
            <Image source={require('./assets/like.jpg')} style={styles.like} />
            <Image source={require('./assets/basket.jpg')} style={styles.basket} />
            <Image source={require('./assets/more.jpg')} style={styles.more} />
          </View>
        </View>  
        <View style={styles.descriptionreview}>
          <Text style={styles.descriptiontext}>Description</Text>
          <Text style={styles.addinfos}>Additional Information</Text>
          <Text style={styles.reviews}>Reviews</Text>
          <Text style={styles.count}>(0)</Text>
        </View> 
        <View style={styles.homeframe}>
          <Image source={require('./assets/houseframe.jpg')} style={styles.houseframe} />
        </View>
        <View style={styles.quickjump}>
          <Text style={styles.quickjumptext}> the quick fox jumps over</Text>

          <Text style={styles.description}>Met Minim Mollie non desert<br></br>
              Alamo est sit cliquey dolor do<br></br>
              met sent.RELIT official consequent<br></br>
              door ENIM RELIT Mollie. Excitation<br></br>
              Venial consequent sent nostrum met.<br></br>
            </Text>

            <Text style={styles.description}>Met Minim Mollie non desert<br></br>
              Alamo est sit cliquey dolor do<br></br>
              met sent.RELIT official consequent<br></br>
              door ENIM RELIT Mollie. Excitation<br></br>
              Venial consequent sent nostrum met.<br></br>
            </Text>

            <Text style={styles.description}>Met Minim Mollie non desert<br></br>
              Alamo est sit cliquey dolor do<br></br>
              met sent.RELIT official consequent<br></br>
              door ENIM RELIT Mollie. Excitation<br></br>
              Venial consequent sent nostrum met.<br></br>
            </Text>
        </View>

        <View style={styles.quickjumptext}> 
            the quick fox jumps over

            <View style={styles.arrowfox}>
            <Image source={require('./assets/iconarrow.jpg')} style={styles.iconarrow} />
            <Text style={styles.foxtext}>the quick fox jumps over the lazy dog</Text>
            </View>

            <View style={styles.arrowfox}>
            <Image source={require('./assets/iconarrow.jpg')} style={styles.iconarrow} />
            <Text style={styles.foxtext}>the quick fox jumps over the lazy dog</Text>
            </View>

            <View style={styles.arrowfox}>
            <Image source={require('./assets/iconarrow.jpg')} style={styles.iconarrow} />
            <Text style={styles.foxtext}>the quick fox jumps over the lazy dog</Text>
            </View>

            <View style={styles.arrowfox}>
            <Image source={require('./assets/iconarrow.jpg')} style={styles.iconarrow} />
            <Text style={styles.foxtext}>the quick fox jumps over the lazy dog</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconarrow:{

    width: '9px',
    height: '16px',
  },

  arrowfox:{
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    flexDirection: 'row',
    marginTop: '1rem',
  },

  foxtext:{
    color: '#737373',
    /* h6 */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  NavBar:{
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    marginTop: '-47rem'
   
  },

  BandageText:{
    width: '414px',
    height: '879px',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  Img:{
    width: '24px',
    height: '13.714px',
    flexShrink: '0',
    marginRight: '8rem'
  },

  home:{
    color: '#252B42',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '45px', 
    letterSpacing: '0.2px'
  },

  contact:{
    color: '#737373',
    textAlign: 'center',
    /* mobile-menu */
    fontFamily: 'Montserrat',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%', /* 150% */
    letterSpacing: '0.2px'
  },

  authIcon:{
    width: '25px',
    height: '25px',
  },

  authView:{
    display: 'flex',
    padding: '15px',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '37px',
    flexDirection: 'row',
    color: '#23A6F0'
  },

  searchIcon:{
    width: '20px',
    height: '20px',
  },

  cartIcon:{
    width: '20px',
    height: '20px',
    display: 'flex',
    padding: '15px',
    alignItems: 'center',
    marginTop: '1rem',
    borderRadius: '1px'
  },

  loveIcon:{
    width: '20px',
    height: '20px',
    marginTop: '1rem',
    borderRadius: '1px'
  },

  icons:{
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  hAnds:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
    alignSelf: 'stretch',
    marginLeft: '37rem',
    marginTop: '1rem',
    background: '#FAFAFA',
  },

  arrow:{
    width: '7px',
    height: '12px',
  },

  Ahome:{
    color: '#252B42',
    textAlign: 'center',
    /* link */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  couch:{
    width: '348px',
    height: '277px',
    flexShrink: '0',
  },

  imageslide:{
    width: '348px',
    height: '394px',
    flexShrink: '0',
    borderRadius: '5px',
    lightTextColor: '#FFFFFF',
  },

  ChevronLeft:{
    width: '24px',
    height: '44.471px',
    flexShrink: '0',
  },

  Chair:{
    width: '100px',
    height: '75px',
    flexShrink: '0',
  },

  couchSlide:{
    width: '100px',
    height: '75px',
    flexShrink: '0',
    opacity: '0.5',
    // background: url('./assets/couchSlide.jpg'), lightgray: 50% / cover no-repeat, url(<path-to-image>), lightgray 50% / cover: 'no-repeat'
  },

  imgSlide:{
    display: 'flex',
    width: '219px',
    height: '75px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '19px',
    flexShrink: '0',
    flexDirection: 'row',
    marginTop: '1rem'
  },

  floating:{
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px', /* 150% */
    letterSpacing: '0.2px',
    color: '#252B42',
    marginRight: '11rem'
  },

  rating:{
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '10px',
    flexDirection: 'row',
  },

  staricon:{
    width: '22.014px',
    height: '22.014px',
  },

  unstaricon:{
    width: '22.014px',
    height: '22.014px',
  },
  review:{
    color: '#737373',
/* h6 */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  price:{
    color: '#252B42',
    textAlign: 'center',
    /* h3 */
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px', /* 133.333% */
    letterSpacing: '0.1px',
    marginRight: '14rem',
    marginTop: '1rem'
  },

  available:{
    flexDirection: 'row',
  },

  availability:{
    color: '#737373',
    /* h6 */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  stock:{
    color: '#23A6F0',
/* h6 */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  description:{
    color: '#858585',
    /* paragraph */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px', /* 142.857% */
    letterSpacing: '0.2px',
    marginTop: '1rem',

  },
  line:{
    width: '283px',
    height: '1px',
    color: '#BDBDBD',
    marginBottom: '1rem'
  },

  eclipes:{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    flexDirection: 'row',
  },

  blue:{
    width: '30px',
    height: '30px',
  },

  green:{
    width: '30px',
    height: '30px',
  },

  orange:{
    width: '30px',
    height: '30px',
  },

  dark:{
    width: '30px',
    height: '30px',
  },

 option:{
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: '10px',
  flexDirection: 'row',
  marginTop: '2rem'
 },

  button:{
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px' /* 171.429% */,
    letterSpacing: '0.2px',
    textTransform: 'lowercase'
    
    
  },

  more:{
    width: '30px',
    height: '30px',
    flexShrink: '0',

  },

  like:{
    width: '30px',
    height: '30px',
    flexShrink: '0',
  },

  basket:{
    width: '30px',
    height: '30px',
    flexShrink: '0',
  },

  descriptionreview:{
    display: 'flex',
    width: '414px',
    height: '91px',
    padding: ('10px', '21px', '9px', '21px'),
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFF',
    flexDirection: 'row',
    gap: '10px',
    marginRight: '2.5rem',
  },

  descriptiontext:{
    color: '#737373',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
    textDecorationLine: 'underline',

  },

  addinfos:{
    color: '#737373',
    textAlign: 'center',
    /* link */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  reviews:{
    color: '#737373',
    textAlign: 'center',
    /* link */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  count:{
    color: '#23856D',
    textAlign: 'center',
    /* link */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px', /* 171.429% */
    letterSpacing: '0.2px',
  },

  houseframe:{
    width: '321px',
    height: '271px',
    flexShrink: '0',
  },

  quickjumptext:{
    color: '#252B42',
    /* h3 */
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px', /* 133.333% */
    letterSpacing: '0.1px',
    marginTop: '2rem'
  },

  metminim:{
    color: '#737373',
    /* paragraph */
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px', /* 142.857% */
    letterSpacing: '0.2px',
  }


});
