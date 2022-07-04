/* code here... */
'use strict';

(function(){
	console.log('loaded at the beginning')
})()


function sortObject(x) {
	if (typeof x !== 'object' || !x)
		return x
	if (Array.isArray(x))
		return x.map(sortObject)
	return Object.keys(x).sort().reduce((o, k) => ({ ...o, [k]: sortObject(x[k]) }), {})
}

const TextArea = ({ textareaValue, setTextareaValue }) => {
	return e('textarea', { class: 'textarea', value: textareaValue, onChange: (e) => setTextareaValue(e.target.value) }, null)
}

const PreContent = ({ content }) => {
	return e('pre', { class: 'pre-content' }, content)
}

const Button = ({ onClick, buttonText }) => {
	return e('button', { onClick: onClick }, buttonText)
}

const Main = () => {
	const [textareaValue, setTextareaValue] = React.useState('')
	const [sortedValue, setSortedValue] = React.useState('')

	const onSortButtonClick = () => {
		console.log('current value is', textareaValue)
		try {
			const result = sortObject(JSON.parse(textareaValue))
			setSortedValue(JSON.stringify(result, undefined, 2))
		} catch (e) {
			console.log('error occurs while parse json', e)
		}

	}

	const onCopyButtonClick = () => {
		console.log('on copy button click')
		navigator.clipboard.writeText(sortedValue)
	}
	return e('div', { class: 'main-div' }, [
		e(TextArea, { textareaValue: textareaValue, setTextareaValue: setTextareaValue }, null),
		e('div', { class: 'actions' }, [
			e(Button, { onClick: onSortButtonClick, buttonText: 'Sort JSON' }, null),
			e(Button, { onClick: onCopyButtonClick, buttonText: 'Copy Result' }, null)
		]),
		e(PreContent, { content: sortedValue }, null)
	])
}

const e = React.createElement;
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Main, {}, null));