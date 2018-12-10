<template>
	<b-navbar toggleable="md" type="dark" variant="primary" sticky>
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-navbar-brand href="#">WebCode</b-navbar-brand>

		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				<b-nav-item href="#">Home</b-nav-item>
				<b-nav-item href="#">About</b-nav-item>
				<b-nav-item href="#">Speakers</b-nav-item>
				<b-nav-item href="#">Contacts</b-nav-item>
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<b-nav-item href="#">Login</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: "Navbar"
}
</script>
