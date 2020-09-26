import React from "react";
import { Text, View, Dimensions, Animated } from "react-native";
import { Icon } from 'react-native-elements';


import SlidingUpPanel from "rn-sliding-up-panel";

const { height } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center"
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  panelHeader: {
    height:30,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
     alignItems:"center", 
     borderTopLeftRadius: 20, 
     borderTopRightRadius: 20,
       shadowColor: "#000",
   shadowOffset: {
  width: 0,
  height:- 3,
   },
   shadowOpacity: 0.15,
   shadowRadius: 2,

    elevation:4,

     },
  textHeader: {
    fontSize: 28,
    color: "#FFF"
  },
 
 
};

class BottomSheet extends React.Component {
  static defaultProps = {
    draggableRange: { top: height + 90 - 64, bottom:90}
  };

  _draggedValue = new Animated.Value(90);

  render() {

    return (
      <View style={styles.container}>
        
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[360]}
          height={height+90}
          showBackdrop={false}
          friction={0.5}
          allowDragging={true}
        >
          <View style={styles.panel}>
           
            <View style={styles.panelHeader}>
           
               <Icon
                    name='horizontal-rule'
                    type='material-icons'
                    color='grey'
                    size={25}
                  />
            </View>
            <View style={styles.container}>
              <Text>Bottom sheet content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default BottomSheet;
