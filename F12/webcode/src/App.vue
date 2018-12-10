<template>
	<div id="app" class="container">
		<div class="jumbotron px-0 pt-0">
			<Navbar/>
			<router-view/>
		</div>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
	components: {
		Navbar
	}
}
</script>
