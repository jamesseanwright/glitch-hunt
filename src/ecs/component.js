var component = {
	_previous: null,
	_next: null,

	get previous() {
		return this._previous
	},

	set previous(previous) {
		this._previous = previous;
	},

	get next() {
		return this._next
	},

	set next(next) {
		this._next = next;
	}
};