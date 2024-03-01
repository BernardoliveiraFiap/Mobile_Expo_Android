import {Text,View,SafeAreaView,ScrollView,Image, StatusBar} from 'react-native'
import Comp1 from './components/Comp1'
import Soma from './components/Soma'
import Estilo from './components/Estilo'
 
export default ()=>(
  <ScrollView>
  <StatusBar barStyle='white-content'/>
   <View style={[Estilo.viewSafeAndroid, {backgroundColor: 'lightblue'}]}>
    <SafeAreaView>
    <View style={Estilo.viewImage}>
      <Image
        style={Estilo.tamImage}
        source={require('./assets/passaro.jpg')}
      />
      </View>
        <Comp1/>
        <Soma x={5} y={10} />
        <Soma x={10} y={20}/>
   
        <Text style={Estilo.txtG}>Contrary to popular belief,
         Lorem Ipsum is not simply random text. It has roots 
         in a piece of classical Latin literature from 45 BC, 
         making it over 2000 years old. Richard McClintock, a 
         Latin professor at Hampden-Sydney College in Virginia, 
         looked up one of the more obscure Latin words, 
         consectetur, from a Lorem Ipsum passage, and going 
         through the cites of the word in classical literature, 
         discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
        comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s
         is reproduced below for those interested. Sections 1.10
         .32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
          Cicero are also reproduced in their exact original form
          , accompanied by English versions from the 1914 transl
          ation by H. Rackham.</Text>

          <Text style={Estilo.txtTitulo}>TURMA 2TDS</Text>
 
      </SafeAreaView>
 
      <View style={Estilo.viewImage}>
      <Image
        style={Estilo.tamImage}
        source={require('./assets/passaro.jpg')}
      />
      </View>
 
  </View>
  </ScrollView>
 
)
