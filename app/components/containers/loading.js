const Loading = React.createClass({
  render: function () {
    if(!this.props.loading) {
      return <span></span>;
    }
    return <span className='fa-spinner fa-spin'></span>
  }
});

export default Loading;
