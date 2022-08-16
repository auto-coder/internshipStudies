import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#1A3C40',
    borderRadius: 15,
    alignItems: 'center',
    width: deviceSize.width / 1.05,
    margin: 10,
    height: 150,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  inner_container: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'red',
  },
  name: {
    fontWeight: 'normal',
    color: '#FFFBE7',
    fontSize: 25,
  },
  price: {
    paddingTop:12,
    color:'#FAF5E4',
    fontSize: 16,
  },
  buyButton: {

    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#EDE6DB',
    borderRadius:10,    
    height:30,
    width:133,

  },
  buyText: {

   fontWeight:'600',
   fontSize:16,
   color:'#1A3C40'
    
  },
});