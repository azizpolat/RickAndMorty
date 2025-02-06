import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';

export const characterDetailStyle = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 200,
    borderWidth: 3,
  },
  statusAliveContainer: {
    borderColor: Colors.GREEN,
  },
  statusDeadContainer: {
    borderColor: Colors.RED,
  },
  aliveStatusContainer: {
    backgroundColor: Colors.GREEN,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  deadStatusContainer: {
    backgroundColor: Colors.RED,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  status: {color: Colors.WHITE, fontSize: 16, margin: 5, fontWeight: '500'},
  nameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',

    marginVertical: 15,
  },
  sectionContainer: {
    margin: 5,
  },
  sectionTitle: {
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.BROWN,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  infoContainer: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  infoBox: {
    backgroundColor: '#d3d3d3',
    flex: 2,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  genderBox: {},
});
