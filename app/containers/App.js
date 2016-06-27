import { connect } from 'react-redux';
import Main from '../components/Main';
import * as actions from '../actionCreators';

// Pass props from store to Main.js
// Connect actionCreators

function mapStateToProps(state) {
  return {
    setTime: state.setTime
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInitialTime : function(currentOption) {
      dispatch(actions.setInitialTime(currentOption));
    },
    startCount : function() {
      dispatch(actions.startCount());
    },
    replaceDigit : function(totalTime) {
      dispatch(actions.replaceDigit(totalTime));
    },
    countFinished : function() {
      dispatch(actions.countFinished());
    }
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;