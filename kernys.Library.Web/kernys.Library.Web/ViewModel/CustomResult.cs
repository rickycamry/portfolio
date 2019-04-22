namespace kernys.Library.Web.ViewModel
{
public class CustomResult{


public ResultType Type { get; set; }

public string Message { get; set; }

}



public enum ResultType{

Ok,
Success,
 Error,
 Warning,
 Validation,

}



}