var ProductsList =React.createClass({
  getInitialState:function()
  {
    return{
      url:[]
    }
  },
  componentDidMount:function()
  {
    var that=this;
     $.ajax({
     url: 'https://api.github.com/users/mralexgray/repos',
     dataType: 'json',
     success: function(data) {
      that.setState({url:data});
     },
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }
   });
  },
  ChangeContent:function()
  {
    this.setState({content:"change Content"});
  },
  render:function()
  {
     var Products = this.state.url.map(function(product) {
            return (
              <li key={product._id}>
                {product.full_name}
              </li>
            )
        });
    return(
      <div>
       {Object.keys(this.state.url).length> 0 ? Products : <span>Loading ..... </span>}
      </div>
      )
  }
});
React.render(
  <ProductsList  />,
  document.getElementById('example')
);
