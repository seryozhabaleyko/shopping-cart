import React, { useEffect } from 'react';

function Foo() {
	console.log('foo');

	return <h2>Foo</h2>;
}

function Home() {
	console.log('Home');

	useEffect(() => {});

	const bar = 1;

	return <Foo bar={bar} />;
}

export default Home;
