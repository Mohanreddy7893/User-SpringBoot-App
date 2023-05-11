package org.jsp.userspringboot.exception;

public class IdNotFoundException extends RuntimeException
{
	@Override
	public String getMessage()
	{
		return "id is not present";
		
	}
	

}
