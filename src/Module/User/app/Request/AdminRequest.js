import yup from "yup";

class AdminRequest {

	async turnAdmin ( req, res, next ) {

		const bodyValidator = yup.object().shape({
			username: yup.string().required()
		});

        const headersValidator = yup.object().shape({
			session_id: yup.string().required()
		});

		try {
			await bodyValidator.validate(req.body);
			await headersValidator.validate(req.headers);


		} catch (err) {
			return res.status(400).json({errors: err.errors});
		}

		await next();
	}
}

export default new AdminRequest;