import yup from "yup";

class SessionRequest {

	async createSession ( req, res, next ) {

		const bodyValidator = yup.object().shape({
			email: yup.string().required(),
            password: yup.string().required()
		});

		try {
			await bodyValidator.validate(req.body);

		} catch (err) {
			return res.status(400).json({errors: err.errors});
		}

		await next();
	}

	async getAllSession ( req, res, next ) {

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

    async disconnectOneSession ( req, res, next ) {

		const headersValidator = yup.object().shape({
			session_id: yup.string().required()
		});

        const bodyValidator = yup.object().shape({
			session_id: yup.string().required(),
		});

		try {
			await bodyValidator.validate(req.body);
			await headersValidator.validate(req.headers);

		} catch (err) {
			return res.status(400).json({errors: err.errors});
		}

		await next();
	}

    async disconnectManySession ( req, res, next ) {

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
}

export default new SessionRequest;