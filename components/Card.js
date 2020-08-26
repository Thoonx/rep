const Card = (props) => (
	<div className="card">
		<img src={props.Image} alt={props.Name}/>
		<h3>{props.Name}</h3>
		<p>{props.Text}</p>

		<style jsx>{`
			.card{
				flex: 1 1 150px;
				background: white;
				border-radius: 20px;
				padding: 20px;
				color: black;
				margin: 10px;
				box-shadow: 6px 5px 13px #00000059;
			}
			.card img{
				width:100%;
			}
		`}</style>
	</div>
	)

	export default Card