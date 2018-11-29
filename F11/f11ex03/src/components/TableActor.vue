<template>
	<div class="container jumbotron">
		<b-table striped bordered hover :items="actors" :fields="fields">
			<template slot="actions" slot-scope="row">
				<router-link :to="{name: 'actor', params: {id: row.item.id, name: row.item.name.toLowerCase().replace(' ', '-')}}">
					<b-button size="sm" class="mr-2">Show details</b-button>
				</router-link>
			</template>
		</b-table>
	</div>
</template>

<script>
export default {
	name: "TableActor",
	props: ["actors"],
	data() {
		return {
			count: 1,
			fields: [
				{
					key: "name",
					sortable: true
				},
				{
					key: "actions"
				}
			]
		};
	}
};
</script>

