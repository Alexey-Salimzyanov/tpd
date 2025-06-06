declare module '*.css' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}
declare module '*.svg' {
	/* global React, */
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'

declare const __IS_DEV__: boolean;
