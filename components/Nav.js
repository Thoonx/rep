import Link from 'next/link'

const Nav = () => (
<nav>
        <ul>
            <li> <Link href="/"><a>Home</a></Link></li>
            <li> <Link href="/test"><a>Test</a></Link></li>
            <li> <Link href="/About"><a>About</a></Link></li>
        </ul>
<style jsx>{`
nav ul li {
	list-style: none;
	display: inline-block;
	padding: 5px 10px;
	color: black;
}

nav{
	background: white;
	border-radius: 25px;
	padding: 10px;
	display: inline-block;
	margin: 20px 20px;
	box-shadow: 6px 5px 13px #00000059;
	position: fixed;
}

nav ul li:nth-child(even){
	border-left: 1px solid #d1d1d1;
	border-right: 1px solid #d1d1d1;
}

`}</style>
</nav>

)

export default Nav