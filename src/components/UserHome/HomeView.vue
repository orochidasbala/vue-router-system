<template>
	<h1>User home page</h1>
	<QuillEditor toolbar="#my-toolbar"></QuillEditor>
	<div id="my-toolbar">
		<!-- Add buttons as you would before -->
		<button class="ql-bold"></button>
		<button class="ql-italic"></button>
	</div>
	<QuillEditor toolbar="#my-toolbar">
		<template #toolbar>
			<div id="my-toolbar">
				<!-- Add buttons as you would before -->
				<button class="ql-bold"></button>
				<button class="ql-italic"></button>

				<!-- But you can also add your own -->
				<button id="custom-button"></button>
			</div>
		</template>
	</QuillEditor>
	<QuillEditor theme="snow" />
	<p>Bootstrap icons</p>
	fill for full
	<li>data - <i class="bi bi-clipboard-data"></i></li>
	<li>message - <i class="bi bi-chat-left-text"></i></li>
	<li>people - <i class="bi bi-people"></i></li>
	<li>person - <i class="bi bi-person"></i></li>
	<li>admin - <i class="bi bi-person-workspace"></i></li>
	<li>person circle - <i class="bi bi-person-circle"></i></li>
	<li>inbox - <i class="bi bi-inbox"></i></li>
	<li>edit - <i class="bi bi-pencil-square"></i></li>
	<li>delete - <i class="bi bi-trash"></i></li>
	<li>close - <i class="bi bi-x"></i> and <i class="bi bi-x-lg"></i></li>
	<li>send - <i class="bi bi-send"></i></li>
	<li>ativity - <i class="bi bi-activity"></i></li>
	<li>plane - <i class="bi bi-airplane"></i></li>
	<li>arrow bar - <i class="bi bi-arrow-bar-left"></i> left right up down</li>
	<li>arrow short - <i class="bi bi-arrow-bar-left"></i> left right</li>
	<li>award - <i class="bi bi-award"></i></li>
	<li>chart bar - <i class="bi bi-bar-chart"></i></li>
	<li>bell - <i class="bi bi-bar-chart"></i></li>
	<li>silent - <i class="bi bi-bell-slash"></i></li>
	<li>body text - <i class="bi bi-body-text"></i></li>
	<li>sun - <i class="bi bi-brightness-high"></i></li>
	<li>bug - <i class="bi bi-bug"></i></li>
	<li>calender - <i class="bi bi-calendar2"></i></li>
	<li>cash - <i class="bi bi-cash-stack"></i></li>
	<li>check square - <i class="bi bi-check-square"></i></li>
	<li>check - <i class="bi bi-check"></i></li>
	<li>up - <i class="bi bi-chevron-compact-up"></i> left right up down</li>
	<li>circle - <i class="bi bi-circle"></i></li>
	<li>circle half - <i class="bi bi-circle-half"></i></li>
	<li>diamond - <i class="bi bi-diamond"></i></li>
	<li>diamond - <i class="bi bi-diamond-half"></i></li>
	<li>clock - <i class="bi bi-clock"></i></li>
	<li>coin - <i class="bi bi-coin"></i></li>
	<li>dollor - <i class="bi bi-currency-dollar"></i></li>
	<li>column gap - <i class="bi bi-columns-gap"></i></li>
	<li>mail - <i class="bi bi-envelope-at"></i></li>
	<li>
		exclamation - <i class="bi bi-exclamation"></i> lg circle diamond
		octagon square triangle
	</li>
	<li>eye - <i class="bi bi-eye"></i></li>
	<li>image - <i class="bi bi-image"></i></li>
	<li>grid - <i class="bi bi-grid-1x2"></i></li>
	<li>heart - <i class="bi bi-heart"></i></li>
	<li>
		hour glass - <i class="bi bi-hourglass"></i> and
		<i class="bi bi-hourglass-bottom"></i> top split
	</li>
	<li>info - <i class="bi bi-info"></i> lg circle square</li>
	<li>list - <i class="bi bi-list"></i></li>
	<li>world - <i class="bi bi-globe-asia-australia"></i></li>
	<li>google - <i class="bi bi-google"></i></li>
	<li>github - <i class="bi bi-github"></i></li>
	<li>instagram - <i class="bi bi-instagram"></i></li>
	<li>youtube - <i class="bi bi-youtube"></i></li>
	<li>facebook - <i class="bi bi-facebook"></i></li>
	<li>messenger - <i class="bi bi-messenger"></i></li>
	<li>whatsapp - <i class="bi bi-whatsapp"></i></li>
	<li>telegram - <i class="bi bi-telegram"></i></li>
	<li>twitter - <i class="bi bi-twitter"></i></li>
	<li>signal - <i class="bi bi-signal"></i></li>
	<li>paypal - <i class="bi bi-paypal"></i></li>
	<li>person card - <i class="bi bi-person-vcard"></i></li>
	<li>pin - <i class="bi bi-pin-angle"></i></li>
	<li>plus - <i class="bi bi-pin-angle"></i>lg circle square dotted</li>
	<li>qr - <i class="bi bi-qr-code"></i> scan</li>
	<li>
		question - <i class="bi bi-question"></i> lg circle square diamond
		octagon
	</li>
	<li>record - <i class="bi bi-record"></i></li>
	<li>search - <i class="bi bi-search"></i></li>
	<li>shield lock - <i class="bi bi-shield-lock"></i></li>
	<li>snapchat - <i class="bi bi-snapchat"></i></li>
	<li>star - <i class="bi bi-star"></i></li>
	<li>stopwatch - <i class="bi bi-star"></i></li>
	<li>phone - <i class="bi bi-telephone"></i></li>
	<li>
		three dots - <i class="bi bi-three-dots"></i> and
		<i class="bi bi-three-dots-vertical"></i>
	</li>
	<li>toggle - <i class="bi bi-toggle-off"></i> on</li>
	<li>tools - <i class="bi bi-tools"></i></li>
	<li>
		connection - <i class="bi bi-wifi-off"></i> and
		<i class="bi bi-wifi"></i>
	</li>
	<li>x diamond - <i class="bi bi-x-diamond"></i></li>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
	components: {
		QuillEditor
	}
};
</script>

<style></style>
