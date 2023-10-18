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
    marginLeft: '37rem'
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
  }

});
