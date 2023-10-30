<nav class="theme-sidebar">
	<div class="theme-header">
		<x-application-logo class="m-2 ms-0 h-9 w-auto fill-current text-white" />
		<h1 class="theme-header-title">My Menu</h1>
		@include("layouts.toggler")
	</div>
	<ul>
		<li>
			<a href="#home"><span class="theme-icon">&#x1F600;</span>
				<span class="theme-menu-text">Home</span></a>
		</li>
		<li>
			<a href="#about">
				<span class="theme-icon">&#x1F600;</span><span class="theme-menu-text">About</span></a>
		</li>
		<li>
			<a href="#about">
				<span class="theme-icon">&#x1F600;</span><span class="theme-menu-text">Contact</span></a>
		</li>
	</ul>
</nav>
