import { useEffect } from "react";

const BrevoScript = () => {
	useEffect(() => {
		(function (d, w, c) {
			w.BrevoConversationsID = "665dbeecd1d5810fe0055b5e";
			w[c] =
				w[c] ||
				function () {
					(w[c].q = w[c].q || []).push(arguments);
				};
			var s = d.createElement("script");
			s.async = true;
			s.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
			if (d.head) d.head.appendChild(s);
		})(document, window, "BrevoConversations");
	}, []);

	return null;
};

export default BrevoScript;
