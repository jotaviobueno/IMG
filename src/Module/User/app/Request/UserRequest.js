import yup from "yup";

class UserRequest {

	async storage ( req, res, next ) {

		const bodyValidator = yup.object().shape({
			full_name: yup.string().max(50).required(),
			username: yup.string().min(3).max(20).required(),
			email: yup.string().email().max(50).required(),
			password: yup.string().min(3).max(30).required(),
			avatar_url: yup.string(),
			birth_date: yup.date().required(),
		});

		try {
			await bodyValidator.validate(req.body);

		} catch (err) {
			return res.status(400).json({errors: err.errors});
		}

		await next();
	}

	async profile( req, res, next ) {

		const headersValidator = yup.object().shape({
			session_id: yup.string().required()
		});

		try {
			await headersValidator.validate(req.headers);

		} catch (err) {
			return res.status(400).json({errors: err.errors});
		}

		await next();
	}

	async outherProfile ( req, res, next ) {

		const headersValidator = yup.object().shape({
			session_id: yup.string().required()
		});

		const paramsValidator = yup.object().shape({
			username: yup.string().required(),
		});

		try {
			await headersValidator.validate(req.headers);
			await paramsValidator.validate(req.params);

		} catch (err) {
			return res.status(400).json({errors: err.errors});
		}

		await next();
	}
}

export default new UserRequest;